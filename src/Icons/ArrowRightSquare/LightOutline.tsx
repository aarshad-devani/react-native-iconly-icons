import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowRightSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.916 3.5C5.233 3.5 3.5 5.135 3.5 7.665v8.669c0 2.53 1.733 4.166 4.416 4.166h8.168c2.683 0 4.416-1.636 4.416-4.166V7.665c0-2.53-1.733-4.165-4.416-4.165H7.916ZM16.084 22H7.916C4.378 22 2 19.723 2 16.334V7.665C2 4.276 4.378 2 7.916 2h8.168C19.622 2 22 4.276 22 7.665v8.669C22 19.723 19.622 22 16.084 22Z" />
      <Path d="M16.086 12.75H7.914a.75.75 0 0 1 0-1.5h8.172a.75.75 0 0 1 0 1.5" />
      <Path d="M12.322 16.498a.75.75 0 0 1-.529-1.281L15.023 12l-3.23-3.217a.75.75 0 0 1 1.058-1.062l3.764 3.748a.746.746 0 0 1 0 1.062l-3.764 3.748a.747.747 0 0 1-.529.219" />
    </G>
  </Svg>
)
export default ArrowRightSquareLightOutline
