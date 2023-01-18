import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const VideoCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16.151 9.673c1.838-1.457 4.305-2.867 4.772-2.362.771.828.705 8.714 0 9.466-.429.467-2.914-.942-4.772-2.39" />
      <Path
        clipRule="evenodd"
        d="M2.514 12.037c0-5.193 1.725-6.923 6.901-6.923s6.9 1.73 6.9 6.923c0 5.191-1.724 6.923-6.9 6.923s-6.9-1.732-6.9-6.923Z"
      />
    </G>
  </Svg>
)
export default VideoCurved
