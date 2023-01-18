import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const MoreSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.665 3.5C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.165 4.416h8.668c2.531 0 4.167-1.733 4.167-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416H7.665ZM16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2h8.669C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.333 22Z" />
      <Path d="M15.948 13.014a1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .995-1h.01a1 1 0 1 1 0 2M11.939 13.014a1.003 1.003 0 0 1-1.004-1c0-.553.442-1 .995-1h.009a1 1 0 1 1 0 2M7.93 13.014a1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .996-1h.009a1 1 0 1 1 0 2" />
    </G>
  </Svg>
)
export default MoreSquareLightOutline
