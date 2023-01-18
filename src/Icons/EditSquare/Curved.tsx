import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const EditSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 2.75c-6.937 0-9.25 2.313-9.25 9.25 0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25" />
      <Path
        clipRule="evenodd"
        d="M19.529 4.304v0a2.4 2.4 0 0 0-3.39.206l-5.883 6.648c-1.517 1.712-.405 4.077-.405 4.077s2.503.793 3.997-.895l5.886-6.647a2.401 2.401 0 0 0-.206-3.39Z"
      />
      <Path d="m15.009 5.8 3.595 3.184" />
    </G>
  </Svg>
)
export default EditSquareCurved
