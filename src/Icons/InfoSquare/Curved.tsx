import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const InfoSquareCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M21.25 12c0 6.937-2.313 9.25-9.25 9.25-6.937 0-9.25-2.313-9.25-9.25 0-6.937 2.313-9.25 9.25-9.25 6.937 0 9.25 2.313 9.25 9.25Z"
      />
      <Path d="M12 15.895V12M12.005 8.5h-.01" />
    </G>
  </Svg>
)
export default InfoSquareCurved
