import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const ArrowDown3LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.751 13.45a.75.75 0 0 1-.75-.75V3.75a.75.75 0 0 1 1.5 0v8.95a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={6} y={11} width={12} height={11}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11.95h11.502v9.437H6V11.95Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m8.11 13.45 3.642 5.78 3.64-5.78H8.11Zm3.642 7.937a.75.75 0 0 1-.635-.35l-5.001-7.938a.748.748 0 0 1 .635-1.149h10.002a.748.748 0 0 1 .634 1.15l-5.001 7.936a.748.748 0 0 1-.634.351Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default ArrowDown3LightOutline
