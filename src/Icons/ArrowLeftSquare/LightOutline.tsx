import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowLeftSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M16.084 3.5c2.683 0 4.416 1.635 4.416 4.165v8.669c0 2.53-1.733 4.166-4.416 4.166H7.916c-2.683 0-4.416-1.636-4.416-4.166V7.665C3.5 5.135 5.233 3.5 7.916 3.5h8.168ZM7.916 22h8.168C19.622 22 22 19.723 22 16.334V7.665C22 4.276 19.622 2 16.084 2H7.916C4.378 2 2 4.276 2 7.665v8.669C2 19.723 4.378 22 7.916 22Z" />
      <Path d="M7.914 12.75h8.172a.75.75 0 0 0 0-1.5H7.914a.75.75 0 0 0 0 1.5" />
      <Path d="M11.678 16.498a.75.75 0 0 0 .529-1.281L8.977 12l3.23-3.217a.75.75 0 0 0-1.058-1.062l-3.764 3.748a.746.746 0 0 0 0 1.062l3.764 3.748a.747.747 0 0 0 .529.219" />
    </G>
  </Svg>
)
export default ArrowLeftSquareLightOutline
