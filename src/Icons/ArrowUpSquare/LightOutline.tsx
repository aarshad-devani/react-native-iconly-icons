import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowUpSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.666 20.5c-2.53 0-4.166-1.733-4.166-4.416V7.916C3.5 5.233 5.136 3.5 7.666 3.5h8.669c2.53 0 4.165 1.733 4.165 4.416v8.168c0 2.683-1.635 4.416-4.165 4.416H7.666ZM16.335 2H7.666C4.277 2 2 4.378 2 7.916v8.168C2 19.622 4.277 22 7.666 22h8.669C19.724 22 22 19.622 22 16.084V7.916C22 4.378 19.724 2 16.335 2Z" />
      <Path d="M12 7.164a.75.75 0 0 0-.75.75v8.172a.75.75 0 0 0 1.5 0V7.914a.75.75 0 0 0-.75-.75" />
      <Path d="M12 7.163a.746.746 0 0 0-.531.221L7.72 11.148a.75.75 0 0 0 1.062 1.06L12 8.975l3.217 3.231a.749.749 0 1 0 1.062-1.059L12.53 7.384a.746.746 0 0 0-.531-.22" />
    </G>
  </Svg>
)
export default ArrowUpSquareLightOutline
