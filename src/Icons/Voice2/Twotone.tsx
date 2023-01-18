import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Voice2Twotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.464 10.932a.75.75 0 0 0-1.5 0 8.154 8.154 0 0 0 7.404 8.12v2.095a.75.75 0 0 0 1.5 0v-2.095a8.155 8.155 0 0 0 7.405-8.12.75.75 0 0 0-1.5 0 6.654 6.654 0 0 1-6.655 6.654 6.653 6.653 0 0 1-6.654-6.654Z"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.992 3.464a2.91 2.91 0 0 0-2.91 2.91v4.55a2.91 2.91 0 0 0 2.91 2.91h.253a2.91 2.91 0 0 0 2.91-2.91V10.8h-2.106a.75.75 0 0 1 0-1.5h2.106V7.626h-1.153a.75.75 0 0 1 0-1.5h1.142a2.91 2.91 0 0 0-2.9-2.663h-.252Zm-4.41 2.91a4.41 4.41 0 0 1 4.41-4.41h.253a4.41 4.41 0 0 1 4.41 4.41v4.55a4.41 4.41 0 0 1-4.41 4.41h-.253a4.41 4.41 0 0 1-4.41-4.41v-4.55Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default Voice2Twotone
