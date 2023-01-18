import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperUploadTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49v10.737c0 2.176 1.658 3.887 3.834 3.887h7.988c2.06 0 3.73-1.827 3.73-3.887v-9.19l-5.066-5.276Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.474 2.75v2.909a2.575 2.575 0 0 0 2.569 2.575c1.316.003 2.663.004 2.754-.002"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.172 8.91a.75.75 0 0 0-1.063 0L8.27 11.763a.75.75 0 0 0 1.063 1.058l1.557-1.564v4.757a.75.75 0 0 0 1.5 0v-4.757l1.557 1.564a.75.75 0 0 0 1.063-1.058L12.17 8.91Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperUploadTwotone
