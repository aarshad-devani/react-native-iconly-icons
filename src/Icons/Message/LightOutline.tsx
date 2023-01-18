import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const MessageLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.777 13.465a3.042 3.042 0 0 1-1.894-.663L5.398 9.186a.751.751 0 0 1 .941-1.168l4.481 3.612a1.544 1.544 0 0 0 1.923-.004l4.436-3.606a.75.75 0 1 1 .947 1.164l-4.444 3.612a3.059 3.059 0 0 1-1.905.669"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={1} y={2} width={22} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2h21.5v19.5H1V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.839 20h9.82c.002-.002.01 0 .016 0 1.141 0 2.153-.408 2.929-1.183.901-.897 1.396-2.186 1.396-3.629V8.32c0-2.793-1.826-4.82-4.341-4.82H6.841C4.326 3.5 2.5 5.527 2.5 8.32v6.868c0 1.443.496 2.732 1.396 3.629C4.672 19.592 5.685 20 6.825 20h.014Zm-.017 1.5c-1.543 0-2.921-.56-3.985-1.62C1.652 18.698 1 17.032 1 15.188V8.32C1 4.717 3.511 2 6.841 2h9.818c3.33 0 5.841 2.717 5.841 6.32v6.868c0 1.844-.652 3.51-1.837 4.692-1.063 1.059-2.442 1.62-3.988 1.62H6.822Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default MessageLightOutline
