import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MessageLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m17.903 8.851-4.444 3.613c-.84.666-2.02.666-2.86 0L6.12 8.851"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16.909 21C19.95 21.008 22 18.51 22 15.438V8.57C22 5.499 19.95 3 16.909 3H7.09C4.05 3 2 5.499 2 8.57v6.868C2 18.51 4.05 21.008 7.091 21h9.818Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default MessageLight
