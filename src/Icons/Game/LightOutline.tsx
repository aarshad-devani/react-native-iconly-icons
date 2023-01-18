import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const GameLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.598 16.56a.75.75 0 0 1-.75-.75v-3.745a.75.75 0 0 1 1.5 0v3.745a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.509 14.687H6.688a.75.75 0 0 1 0-1.5h3.82a.75.75 0 0 1 0 1.5M15.116 12.929h-.107a.75.75 0 0 1 0-1.5h.107a.75.75 0 0 1 0 1.5M16.93 16.503h-.107a.75.75 0 0 1 0-1.5h.107a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={7} y={1} width={7} height={6}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.072 1h6.04v5.588h-6.04V1Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.362 6.588a.75.75 0 0 1-.75-.75v-.675c-.003-.724-.617-1.32-1.368-1.322H9.19c-1.167 0-2.118-.938-2.118-2.091a.75.75 0 0 1 1.5 0c0 .326.277.59.618.59h1.057c1.573.006 2.858 1.27 2.865 2.819v.679a.75.75 0 0 1-.75.75"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={1} y={5} width={22} height={18}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5.373h21.5V22.5H1V5.373Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.701 6.873c-1.476 0-2.934.013-4.366.037-2.807 0-4.835 1.978-4.835 4.702v4.65c0 2.723 2.028 4.701 4.823 4.701 2.947.049 5.918.049 8.842 0h.013c2.794 0 4.822-1.978 4.822-4.701v-4.65c0-2.724-2.028-4.702-4.822-4.702a280.925 280.925 0 0 0-4.477-.037m.053 15.627c-1.483 0-2.968-.013-4.444-.037-3.65 0-6.31-2.609-6.31-6.201v-4.65C1 8.019 3.66 5.41 7.323 5.41c2.87-.049 5.857-.049 8.867 0 3.651 0 6.31 2.609 6.31 6.202v4.65c0 3.59-2.655 6.198-6.316 6.201-1.468.024-2.948.037-4.43.037"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default GameLightOutline
