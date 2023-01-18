import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LockTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M15.683 21.25h-7.64a3.792 3.792 0 0 1-3.793-3.793v-4.289a3.792 3.792 0 0 1 3.792-3.792h7.641a3.792 3.792 0 0 1 3.792 3.793v4.288a3.792 3.792 0 0 1-3.792 3.793Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.863 14.203v2.22"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default LockTwotone
