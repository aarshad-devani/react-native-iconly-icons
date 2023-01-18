import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const ArrowLeft3LightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3 13.5h8.95a.75.75 0 0 0 0-1.5H12.3a.75.75 0 0 0 0 1.5"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={7} width={11} height={12}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.05 7H3.613v11.501h9.437v-11.5Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.55 9.109v7.283L5.77 12.75l5.78-3.642Zm.75 9.393a.752.752 0 0 0 .75-.75V7.75a.748.748 0 0 0-1.15-.635l-7.937 5a.749.749 0 0 0 0 1.27l7.938 5c.12.078.26.117.399.117Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default ArrowLeft3LightOutline
