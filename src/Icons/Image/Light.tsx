import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ImageLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M21.21 7.9v8.15c0 3.02-1.89 5.15-4.91 5.15H7.65c-3.02 0-4.9-2.13-4.9-5.15V7.9c0-3.02 1.89-5.15 4.9-5.15h8.65c3.02 0 4.91 2.13 4.91 5.15Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m5.281 16.43 1.528-1.612a1.401 1.401 0 0 1 1.98-.06l.937.952a1.434 1.434 0 0 0 2.027.02c.037-.036 2.334-2.822 2.334-2.822a1.687 1.687 0 0 1 2.375-.23c.048.04 2.218 2.268 2.218 2.268"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M10.313 9.133a1.754 1.754 0 1 1-3.508.001 1.754 1.754 0 0 1 3.508 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ImageLight
