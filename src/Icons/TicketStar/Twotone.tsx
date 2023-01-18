import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TicketStarTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M17.857 20.417a3.392 3.392 0 0 0 3.393-3.393v-2.7c-1.24 0-2.24-1-2.24-2.239 0-1.24 1-2.239 2.24-2.239l-.002-2.703a3.392 3.392 0 0 0-3.392-3.393H6.144a3.393 3.393 0 0 0-3.393 3.393v2.79c1.238 0 2.238.912 2.238 2.152 0 1.239-1 2.239-2.239 2.239v2.7a3.392 3.392 0 0 0 3.392 3.393h11.715Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="m12 13.854 1.74.916a.223.223 0 0 0 .323-.234l-.333-1.94 1.409-1.37a.222.222 0 0 0-.123-.38l-1.946-.283-.871-1.763a.222.222 0 0 0-.398 0l-.871 1.763-1.945.284a.222.222 0 0 0-.123.379l1.408 1.37-.333 1.94a.223.223 0 0 0 .323.234l1.74-.915Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default TicketStarTwotone
