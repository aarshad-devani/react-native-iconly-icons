import React from "react"
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg"
const ArrowUp3Bulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        opacity={0.4}
        d="M11.34 20.289v-8.478a.71.71 0 0 1 1.422 0v8.478a.71.71 0 0 1-1.421 0Z"
        fill={props.fillColor}
      />
      <Mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={6}
        y={3}
        width={12}
        height={10}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 12.521H6.603v-8.94H17.5v8.94Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          d="M6.603 11.81c0-.132.037-.263.109-.378l4.738-7.519a.712.712 0 0 1 1.203 0l4.738 7.519a.71.71 0 0 1-.602 1.09H7.314a.709.709 0 0 1-.71-.711Z"
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
export default ArrowUp3Bulk
