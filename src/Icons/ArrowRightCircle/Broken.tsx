import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRightCircleBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.114 13.519A10.1 10.1 0 0 1 2 12C2 6.486 6.486 2 12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10a9.939 9.939 0 0 1-7.927-3.902.728.728 0 0 1 1.153-.888 8.486 8.486 0 0 0 6.775 3.336c4.711 0 8.546-3.833 8.546-8.546 0-4.712-3.835-8.545-8.546-8.545-4.713 0-8.547 3.833-8.547 8.545 0 .437.033.874.098 1.299a.728.728 0 0 1-1.438.22Zm12.68-1.518c0 .199-.078.39-.22.53l-3.486 3.472a.75.75 0 1 1-1.06-1.062L12.983 12l-2.953-2.94a.75.75 0 1 1 1.059-1.063l3.486 3.472c.142.14.22.33.22.53Z"
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
export default ArrowRightCircleBroken
