import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const ActivityLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.216 16.003a.75.75 0 0 1-.594-1.207l2.993-3.89a.75.75 0 0 1 1.058-.132l2.82 2.215 2.467-3.183a.75.75 0 1 1 1.186.918l-2.93 3.78a.746.746 0 0 1-.5.285.741.741 0 0 1-.556-.154l-2.818-2.214-2.53 3.289a.75.75 0 0 1-.596.293"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={17} y={2} width={6} height={6}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.295 2h5.344v5.345h-5.344V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.967 3.5a1.173 1.173 0 0 0 0 2.345 1.173 1.173 0 0 0 0-2.345m0 3.845a2.676 2.676 0 0 1-2.672-2.673A2.675 2.675 0 0 1 19.967 2a2.674 2.674 0 0 1 2.672 2.672 2.675 2.675 0 0 1-2.672 2.673"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={2} y={2} width={20} height={21}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2.842h19.862v19.861H2V2.843Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.233 22.703H7.629C4.262 22.703 2 20.338 2 16.818V8.736c0-3.525 2.262-5.894 5.629-5.894h7.268a.75.75 0 0 1 0 1.5H7.629C5.121 4.342 3.5 6.066 3.5 8.736v8.082c0 2.705 1.582 4.385 4.129 4.385h8.604c2.508 0 4.129-1.72 4.129-4.385V9.78a.75.75 0 0 1 1.5 0v7.04c0 3.52-2.262 5.884-5.629 5.884"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default ActivityLightOutline
