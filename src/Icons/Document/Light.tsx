import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DocumentLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M15.716 16.223h-7.22M15.716 12.037h-7.22M11.251 7.86H8.496"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="m15.909 2.75-7.69.004C5.46 2.77 3.75 4.587 3.75 7.357v9.196c0 2.784 1.722 4.607 4.506 4.607l7.69-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.724-4.607-4.508-4.607Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DocumentLight
