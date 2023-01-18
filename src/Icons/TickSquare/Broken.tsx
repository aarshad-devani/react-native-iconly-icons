import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TickSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10.822a.757.757 0 0 1-.756.756h-.009v-.018a.765.765 0 0 1-.765-.763V8.253c0-3.053-1.67-4.723-4.714-4.723h-7.5C5.21 3.53 3.53 5.21 3.53 8.253v7.5c0 3.034 1.68 4.714 4.723 4.714h7.5c3.043 0 4.714-1.68 4.714-4.714a.765.765 0 1 1 1.53 0C22 19.608 19.608 22 15.756 22H8.253C4.392 22 2 19.608 2 15.756v-7.5C2 4.392 4.392 2 8.253 2h7.5C19.59 2 22 4.392 22 8.253v2.569Zm-11.186 2.492 4.216-4.217a.75.75 0 1 1 1.06 1.06l-4.746 4.748a.754.754 0 0 1-1.061 0L7.91 12.53a.75.75 0 1 1 1.06-1.062l1.844 1.845Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default TickSquareBroken
