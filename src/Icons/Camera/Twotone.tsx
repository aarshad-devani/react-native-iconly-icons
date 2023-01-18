import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CameraTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M15.04 4.051c1.01.402 1.32 1.803 1.732 2.252.413.45 1.004.604 1.331.604a3.147 3.147 0 0 1 3.147 3.146v5.794a4.22 4.22 0 0 1-4.22 4.22H6.97a4.22 4.22 0 0 1-4.22-4.22v-5.794a3.147 3.147 0 0 1 3.147-3.147c.326 0 .917-.152 1.331-.603.413-.45.721-1.85 1.731-2.252 1.011-.401 5.071-.401 6.081 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M17.496 9.7h.009"
      stroke={props.fillColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M15.179 13.328a3.179 3.179 0 1 0-6.357 0 3.179 3.179 0 0 0 6.357 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CameraTwotone
