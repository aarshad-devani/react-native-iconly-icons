import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const ArrowRight3LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7 13.5H3.75a.75.75 0 0 1 0-1.5h8.95a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={11} y={7} width={11} height={12}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.95 7h9.437v11.501H11.95v-11.5Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.45 9.109v7.283l5.78-3.641-5.78-3.642Zm-.75 9.393a.752.752 0 0 1-.75-.75V7.75a.748.748 0 0 1 1.15-.635l7.937 5a.749.749 0 0 1 0 1.27l-7.938 5a.744.744 0 0 1-.399.117Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default ArrowRight3LightOutline
