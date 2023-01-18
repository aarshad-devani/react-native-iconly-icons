import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ActivityCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m6.917 14.854 2.993-3.889 3.414 2.68 2.929-3.78" />
      <Path
        clipRule="evenodd"
        d="M19.667 2.35a1.921 1.921 0 1 1 .001 3.843 1.921 1.921 0 0 1 0-3.843Z"
      />
      <Path d="M20.756 9.269c.133.895.194 1.903.194 3.034 0 6.938-2.313 9.25-9.25 9.25-6.938 0-9.25-2.312-9.25-9.25 0-6.937 2.312-9.25 9.25-9.25 1.11 0 2.1.059 2.982.187" />
    </G>
  </Svg>
)
export default ActivityCurved
