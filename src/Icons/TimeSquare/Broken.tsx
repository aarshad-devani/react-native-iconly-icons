import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimeSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.774 11.34a.755.755 0 0 0 .756-.756V8.253c0-3.043 1.68-4.723 4.723-4.723h7.494c3.053 0 4.723 1.68 4.723 4.723v7.5c0 3.043-1.68 4.714-4.723 4.714H8.254c-3.052 0-4.723-1.68-4.723-4.714a.765.765 0 1 0-1.53 0C2 19.608 4.392 22 8.244 22h7.503C19.608 22 22 19.608 22 15.756v-7.5C22 4.393 19.608 2 15.747 2H8.254C4.41 2 2 4.393 2 8.253v2.322a.763.763 0 0 0 .763.765h.011Zm8.476-3.706a.75.75 0 0 1 1.5 0v3.935l3.026 1.804a.752.752 0 0 1-.385 1.395.747.747 0 0 1-.384-.106l-3.39-2.023a.752.752 0 0 1-.367-.645v-4.36Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default TimeSquareBroken
