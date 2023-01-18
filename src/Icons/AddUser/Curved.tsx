import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const AddUserCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M9.922 21.808c-3.814 0-7.072-.577-7.072-2.887s3.237-4.41 7.072-4.41c3.814 0 7.072 2.08 7.072 4.39 0 2.308-3.237 2.907-7.072 2.907ZM9.922 11.216A4.534 4.534 0 1 0 5.39 6.683a4.518 4.518 0 0 0 4.501 4.533h.032Z"
      />
      <Path d="M19.131 8.129v4.01M21.178 10.134h-4.09" />
    </G>
  </Svg>
)
export default AddUserCurved
