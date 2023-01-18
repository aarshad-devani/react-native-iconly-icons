import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const DownloadCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.88 14.791V2.75M14.795 11.864l-2.916 2.928-2.916-2.928" />
      <Path d="M16.37 7.259c3.58.33 4.88 1.67 4.88 7 0 7.1-2.31 7.1-9.25 7.1-6.94 0-9.25 0-9.25-7.1 0-5.33 1.3-6.67 4.88-7" />
    </G>
  </Svg>
)
export default DownloadCurved
