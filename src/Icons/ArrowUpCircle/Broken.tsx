import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUpCircleBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.52 21.886A10.1 10.1 0 0 1 12 22C6.487 22 2 17.514 2 12S6.486 2 12 2c5.515 0 10 4.486 10 10a9.939 9.939 0 0 1-3.901 7.927.728.728 0 0 1-.889-1.153A8.486 8.486 0 0 0 20.547 12c0-4.712-3.834-8.546-8.546-8.546-4.713 0-8.546 3.834-8.546 8.546s3.833 8.546 8.546 8.546a8.62 8.62 0 0 0 1.299-.098.728.728 0 0 1 .22 1.438ZM12 9.206c.2 0 .39.079.531.22l3.471 3.487a.75.75 0 1 1-1.062 1.059l-2.94-2.953-2.94 2.953a.75.75 0 1 1-1.063-1.06l3.472-3.485a.744.744 0 0 1 .531-.221Z"
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
export default ArrowUpCircleBroken
