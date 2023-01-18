import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeftCircleBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.887 10.481A10.1 10.1 0 0 1 22 12c0 5.514-4.485 10-10 10-5.514 0-10-4.486-10-10S6.486 2 12 2a9.939 9.939 0 0 1 7.927 3.902.728.728 0 0 1-1.152.888A8.486 8.486 0 0 0 12 3.454c-4.713 0-8.547 3.833-8.547 8.546 0 4.712 3.834 8.545 8.546 8.545s8.547-3.833 8.547-8.545a8.62 8.62 0 0 0-.099-1.299.728.728 0 0 1 1.439-.22Zm-12.68 1.518c0-.199.078-.39.22-.53l3.486-3.472a.75.75 0 1 1 1.06 1.062L11.018 12l2.953 2.94a.75.75 0 1 1-1.059 1.063L9.427 12.53a.744.744 0 0 1-.22-.53Z"
        fill={props.fillColor}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowLeftCircleBroken
