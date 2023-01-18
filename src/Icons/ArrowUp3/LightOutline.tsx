import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const ArrowUp3LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.751 11.55a.75.75 0 0 0-.75.75v8.95a.75.75 0 0 0 1.5 0V12.3a.75.75 0 0 0-.75-.75"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={6} y={3} width={12} height={11}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 13.05h11.502V3.613H6v9.437Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m8.11 11.55 3.642-5.78 3.64 5.78H8.11Zm3.642-7.937a.75.75 0 0 0-.635.35l-5.001 7.938a.748.748 0 0 0 .635 1.149h10.002a.748.748 0 0 0 .634-1.15l-5.001-7.936a.748.748 0 0 0-.634-.351Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default ArrowUp3LightOutline
