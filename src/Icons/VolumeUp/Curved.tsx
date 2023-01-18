import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const VolumeUpCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M19.436 5.774c2.493 3.72 2.5 8.63 0 12.358M16.989 8.217a7.74 7.74 0 0 1 0 7.472" />
      <Path
        clipRule="evenodd"
        d="M2.682 11.953c-.002 1.246 0 2.708 1.03 3.582 1.03.874 1.846.513 3.178.952 1.332.439 3.199 3.146 5.26 1.923 1.115-.792 1.64-2.286 1.64-6.457 0-4.171-.501-5.65-1.64-6.457C10.09 4.274 8.223 6.98 6.89 7.419c-1.332.44-2.149.079-3.179.952-1.029.874-1.031 2.336-1.029 3.582Z"
      />
    </G>
  </Svg>
)
export default VolumeUpCurved
