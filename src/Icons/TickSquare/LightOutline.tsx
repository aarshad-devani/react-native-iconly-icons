import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const TickSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.665 3.5C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.165 4.416h8.668c2.531 0 4.167-1.733 4.167-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416H7.665ZM16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2h8.669C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.333 22Z" />
      <Path d="M10.813 15.123a.746.746 0 0 1-.53-.22L7.91 12.53a.749.749 0 1 1 1.06-1.06l1.844 1.842 4.216-4.215a.749.749 0 1 1 1.06 1.06l-4.746 4.746a.744.744 0 0 1-.53.22" />
    </G>
  </Svg>
)
export default TickSquareLightOutline
