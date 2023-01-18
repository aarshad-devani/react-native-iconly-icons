import React from "react"
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg"
const ArrowDown3Bulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        opacity={0.4}
        d="M12.66 3.711v8.478a.71.71 0 0 1-1.422 0V3.711a.71.71 0 0 1 1.421 0"
        fill={props.fillColor}
      />
      <Mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={6}
        y={11}
        width={12}
        height={10}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 11.479h10.897v8.94H6.5v-8.94Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          d="M17.397 12.19a.715.715 0 0 1-.109.378l-4.738 7.519a.712.712 0 0 1-1.203 0l-4.738-7.519a.71.71 0 0 1 .602-1.09h9.475a.709.709 0 0 1 .71.711"
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
export default ArrowDown3Bulk
