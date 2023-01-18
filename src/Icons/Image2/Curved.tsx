import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Image2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25Z"
      />
      <Path
        clipRule="evenodd"
        d="M10.599 8.784a1.76 1.76 0 1 1-3.521.001 1.76 1.76 0 0 1 3.52 0Z"
      />
      <Path d="M21.12 14.666c-.88-.906-2.127-2.737-4.416-2.737-2.289 0-2.339 4.038-4.675 4.038-2.337 0-3.278-1.37-4.8-.655-1.523.715-2.763 3.561-2.763 3.561" />
    </G>
  </Svg>
)
export default Image2Curved
