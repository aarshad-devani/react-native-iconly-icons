import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const MessageCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M17.545 9.019s-3.21 3.853-5.558 3.853c-2.347 0-5.593-3.853-5.593-3.853" />
      <Path
        clipRule="evenodd"
        d="M2.452 11.969c0-6.838 2.381-9.117 9.524-9.117 7.143 0 9.524 2.279 9.524 9.117 0 6.837-2.381 9.117-9.524 9.117-7.143 0-9.524-2.28-9.524-9.117Z"
      />
    </G>
  </Svg>
)
export default MessageCurved
