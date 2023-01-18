import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const InfoSquareLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2h20v20H2V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.664 3.5C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.164 4.416h8.668c2.532 0 4.168-1.733 4.168-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416h-8.67ZM16.332 22H7.664C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.664 2h8.67C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.332 22Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.994 16.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75M11.999 9.204a1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .995-1h.01a1 1 0 1 1 0 2"
      fill={props.fillColor}
    />
  </Svg>
)
export default InfoSquareLightOutline
