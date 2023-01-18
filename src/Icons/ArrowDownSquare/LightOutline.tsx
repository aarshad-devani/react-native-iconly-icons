import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowDownSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.666 3.5C5.136 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.636 4.416 4.166 4.416h8.669c2.53 0 4.165-1.733 4.165-4.416V7.916c0-2.683-1.635-4.416-4.165-4.416H7.666ZM16.335 22H7.666C4.277 22 2 19.622 2 16.084V7.916C2 4.378 4.277 2 7.666 2h8.669C19.724 2 22 4.378 22 7.916v8.168C22 19.622 19.724 22 16.335 22Z" />
      <Path d="M12 16.836a.75.75 0 0 1-.75-.75V7.914a.75.75 0 0 1 1.5 0v8.172a.75.75 0 0 1-.75.75" />
      <Path d="M12 16.837a.746.746 0 0 1-.531-.221L7.72 12.852a.75.75 0 0 1 1.062-1.06L12 15.025l3.217-3.231a.749.749 0 1 1 1.062 1.059l-3.748 3.764a.746.746 0 0 1-.531.22" />
    </G>
  </Svg>
)
export default ArrowDownSquareLightOutline
