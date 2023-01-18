import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowDownCircleBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.482 2.114A10.1 10.1 0 0 1 12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10C6.486 22 2 17.514 2 12a9.939 9.939 0 0 1 3.901-7.927.728.728 0 0 1 .888 1.153A8.486 8.486 0 0 0 3.454 12c0 4.712 3.833 8.546 8.546 8.546 4.712 0 8.546-3.834 8.546-8.546S16.712 3.454 12 3.454a8.62 8.62 0 0 0-1.3.098.728.728 0 0 1-.22-1.438ZM12 14.794a.748.748 0 0 1-.531-.22l-3.471-3.487a.75.75 0 1 1 1.062-1.059L12 12.981l2.94-2.953a.75.75 0 1 1 1.063 1.06l-3.472 3.485a.744.744 0 0 1-.531.221Z"
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
export default ArrowDownCircleBroken
