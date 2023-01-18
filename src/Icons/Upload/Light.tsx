import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UploadLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M7.39 8.984h-.934a3.685 3.685 0 0 0-3.685 3.685v4.875a3.685 3.685 0 0 0 3.685 3.684h11.13a3.685 3.685 0 0 0 3.686-3.684v-4.885a3.675 3.675 0 0 0-3.674-3.675h-.944M12.021 2.19v12.042M9.106 5.119l2.915-2.928 2.916 2.928"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default UploadLight
