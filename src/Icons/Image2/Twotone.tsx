import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Image2Twotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M16.303 2.75H7.65c-3.012 0-4.901 2.134-4.901 5.154v8.146c0 3.02 1.88 5.154 4.9 5.154h8.648c3.025 0 4.905-2.134 4.905-5.154V7.904c.004-3.02-1.877-5.154-4.9-5.154Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M10.703 8.785a1.845 1.845 0 1 1-3.69.001 1.845 1.845 0 0 1 3.69-.001Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M21.207 14.951c-.923-.95-2.698-2.869-4.628-2.869-1.931 0-3.044 4.233-4.901 4.233-1.857 0-3.544-1.914-5.032-.687-1.488 1.226-2.896 3.733-2.896 3.733"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Image2Twotone
