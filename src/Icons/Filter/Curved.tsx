import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const FilterCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.144 17.883H4.67" />
      <Path
        clipRule="evenodd"
        d="M15.205 17.884c0 2.042.681 2.722 2.722 2.722 2.04 0 2.722-.68 2.722-2.722s-.681-2.722-2.722-2.722-2.722.68-2.722 2.722Z"
      />
      <Path d="M14.177 7.394h6.471" />
      <Path
        clipRule="evenodd"
        d="M10.115 7.393c0-2.041-.68-2.722-2.721-2.722-2.042 0-2.723.681-2.723 2.722 0 2.042.68 2.722 2.723 2.722 2.04 0 2.721-.68 2.721-2.722Z"
      />
    </G>
  </Svg>
)
export default FilterCurved
