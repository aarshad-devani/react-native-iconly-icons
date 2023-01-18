import React from "react"
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg"
const ArrowLeft3Bulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        opacity={0.4}
        d="M20.289 12.66h-8.478a.71.71 0 0 1 0-1.422h8.478a.71.71 0 0 1 0 1.421Z"
        fill={props.fillColor}
      />
      <Mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={3}
        y={6}
        width={10}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.521 6.5v10.897h-8.94V6.5h8.94Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          d="M11.81 17.397a.715.715 0 0 1-.378-.109L3.913 12.55a.712.712 0 0 1 0-1.203l7.519-4.738a.71.71 0 0 1 1.09.602v9.475a.709.709 0 0 1-.711.71Z"
          fill={props.fillColor}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowLeft3Bulk
