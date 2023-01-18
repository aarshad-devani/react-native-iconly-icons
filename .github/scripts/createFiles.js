const { readFileSync, writeFileSync, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");
const { sync } = require("glob");
const { transform } = require("@svgr/core");
const jsx = require("@svgr/plugin-jsx");
const svgo = require("@svgr/plugin-svgo");
const prettier = require("@svgr/plugin-prettier");

const EnsureDirectory = (directoryPath) => {
  if (!existsSync(directoryPath)) {
    mkdirSync(directoryPath, { recursive: true });
  }
};

const template = (variables, { tpl }) => {
  return tpl`
  ${variables.imports};
  
  ${variables.interfaces};

  interface IExtension {
    fillColor: string
  }
  
  const ${variables.componentName} = (${variables.props} & IExtension) => (
    ${variables.jsx}
  );
   
  ${variables.exports};
  `;
};

const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  //   props[0].typeAnnotation.typeAnnotation.typeName.name =
  //     "SvgProps & IExtension";
  return tpl`${imports}
  
  ${interfaces}

  interface IExtension {
    fillColor: string
  }
  
  const ${componentName} = (${props}) => (
    ${jsx}
  );
  
  ${exports}
    `;
};

const variants = [
  "Bold",
  "Broken",
  "Bulk",
  "Curved",
  "Light",
  "Light-Outline",
  "Two-tone",
];

const allSvgInstances = sync("**/*.svg", {
  root: "./icons/Bold",
  cwd: "./icons/Bold",
});

let IconsNameMap = {};

const createIconFile = (fileName) => {
  const IconName = fileName.replace(/ /g, "").replace(/-/g, "").slice(0, -4);
  IconsNameMap[IconName] = fileName.slice(0, -4);

  const basePath = resolve("src", "Icons", IconName);

  EnsureDirectory(basePath);

  let availableVariants = [];
  variants.forEach((variant) => {
    const variantName = variant.replace(/-/g, "");
    const filePath = resolve("icons", variant, fileName);
    if (existsSync(filePath)) {
      availableVariants.push(variantName);
      const fileContents = readFileSync(filePath, { encoding: "utf-8" });
      const transformedCode = transform.sync(
        fileContents
          .replace(/style="mask-type:luminance"/g, "")
          .replace('xmlns="http://www.w3.org/2000/svg"', ""),
        {
          icon: false,
          native: true,
          typescript: true,
          ref: false,
          memo: false,
          titleProp: false,
          descProp: false,
          expandProps: "end",
          replaceAttrValues: {
            "#212121": "{props.fillColor}",
          },
          svgProps: {},
          svgo: true,
          //   template: propTypesTemplate,
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: { overrides: { removeTitle: false } },
              },
            ],
          },
          prettier: true,
          prettierConfig: { semi: false },
          plugins: [svgo, jsx, prettier],
        },
        { componentName: IconName + variantName }
      );
      writeFileSync(
        resolve(basePath, variantName + ".tsx"),
        transformedCode
          .replace(
            'import * as React from "react"',
            'import React from "react"'
          )
          .replace("SvgProps)", "SvgProps & { fillColor: string })")
      );
    }
  });

  writeFileSync(
    resolve(basePath, "index.tsx"),
    `import React, { FC } from "react";
import { SvgProps } from "react-native-svg";
${availableVariants
  .map((x) => "import " + x + ' from "./' + x + '";')
  .join("\n")}

interface IIconProps {
  variant:
    | "Bold"
    | "Broken"
    | "Bulk"
    | "Curved"
    | "Light"
    | "LightOutline"
    | "Twotone";
  fillColor?: string;
}

const ${IconName}: FC<SvgProps & IIconProps> = (props) => {
  switch (props.variant) {
    default:
    ${availableVariants
      .map(
        (x) =>
          'case "' +
          x +
          '": return <' +
          x +
          ' fillColor={props.fillColor ?? "#212121"} {...props} />;'
      )
      .join("\n    ")}
  }
};

export default ${IconName};
${availableVariants
  .map((x) => "export const " + IconName + x + " = " + x + ";")
  .join("\n")}
`
  );
};

allSvgInstances.forEach((x) => createIconFile(x));

writeFileSync(
  "./src/Icons/index.ts",
  Object.keys(IconsNameMap)
    .map((x) => `export * from "./${x}"`)
    .join("\n")
);
