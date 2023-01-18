import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const User2LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={13} width={16} height={9}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13.957h15.184v7.1H2v-7.1Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.592 15.457c-2.78 0-6.092.357-6.092 2.062 0 1.352 2.05 2.038 6.092 2.038s6.092-.693 6.092-2.058c0-1.355-2.05-2.042-6.092-2.042m0 5.6c-2.076 0-7.592 0-7.592-3.538 0-3.562 5.714-3.562 7.592-3.562 3.259 0 7.592.367 7.592 3.542 0 3.558-5.714 3.558-7.592 3.558"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.592 3.5a3.64 3.64 0 0 0-3.636 3.635 3.64 3.64 0 0 0 3.636 3.635h.03a3.594 3.594 0 0 0 2.554-1.07 3.587 3.587 0 0 0 1.05-2.562A3.64 3.64 0 0 0 9.593 3.5Zm0 8.77a5.142 5.142 0 0 1-5.136-5.135A5.142 5.142 0 0 1 9.592 2a5.141 5.141 0 0 1 5.135 5.135 5.077 5.077 0 0 1-1.487 3.622 5.081 5.081 0 0 1-3.614 1.513h-.034ZM16.482 11.132a.75.75 0 0 1-.104-1.493 2.559 2.559 0 0 0 2.192-2.52 2.538 2.538 0 0 0-2.133-2.514.75.75 0 0 1 .242-1.481A4.033 4.033 0 0 1 20.07 7.12a4.069 4.069 0 0 1-3.483 4.005.74.74 0 0 1-.105.007"
      fill={props.fillColor}
    />
    <Mask id="b" maskUnits="userSpaceOnUse" x={17} y={13} width={5} height={6}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.845 13.483h4.134v4.978h-4.134v-4.978Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.895 18.46a.75.75 0 0 1-.265-1.45c.85-.322.85-.715.85-.883 0-.567-.672-.955-1.995-1.152a.752.752 0 0 1-.631-.853.762.762 0 0 1 .852-.632c2.707.405 3.274 1.658 3.274 2.637 0 .729-.316 1.716-1.819 2.285a.75.75 0 0 1-.266.049"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default User2LightOutline
