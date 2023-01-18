import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DangerTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M11.25 16.27c0-.414.336-.756.75-.756s.75.33.75.745v.01a.75.75 0 0 1-1.5 0Z"
      fill={props.fillColor}
    />
    <Path
      d="M4.796 20.418h14.482a2.08 2.08 0 0 0 1.819-2.859L13.82 4.823a2.078 2.078 0 0 0-3.64 0L2.905 17.559a2.08 2.08 0 0 0 1.819 2.859"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M11.99 13.396v-3.1"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DangerTwotone
