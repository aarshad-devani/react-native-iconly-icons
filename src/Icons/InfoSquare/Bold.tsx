import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const InfoSquareBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.67 2h8.67C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2Zm4.32 7.06a.87.87 0 0 1-.86-.87.875.875 0 1 1 .86.87Zm.88 6.72c0 .48-.39.87-.88.87a.87.87 0 0 1-.87-.87v-4.42c0-.48.39-.88.87-.88.49 0 .88.4.88.88v4.42Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default InfoSquareBold
