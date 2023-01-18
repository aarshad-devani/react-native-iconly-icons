import React from "react"
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg"
const ArrowRight3Bulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        opacity={0.4}
        d="M3.711 11.34h8.478a.71.71 0 0 1 0 1.422H3.711a.71.71 0 0 1 0-1.421Z"
        fill={props.fillColor}
      />
      <Mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={11}
        y={6}
        width={10}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.479 17.5V6.603h8.94V17.5h-8.94Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          d="M12.19 6.603c.132 0 .263.037.378.109l7.519 4.738a.712.712 0 0 1 0 1.203l-7.519 4.738a.71.71 0 0 1-1.09-.602V7.314a.709.709 0 0 1 .711-.71Z"
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
export default ArrowRight3Bulk
