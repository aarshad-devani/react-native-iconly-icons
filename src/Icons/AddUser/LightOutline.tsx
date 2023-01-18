import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const AddUserLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={14} width={16} height={8}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14.456h15.754v7.339H2v-7.339Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.877 15.956c-4.231 0-6.377.727-6.377 2.16 0 1.445 2.146 2.18 6.377 2.18s6.377-.728 6.377-2.159c0-1.448-2.146-2.18-6.377-2.18m0 5.838c-1.948 0-7.877 0-7.877-3.68 0-3.28 4.495-3.659 7.877-3.659 1.948 0 7.877 0 7.877 3.681 0 3.28-4.495 3.658-7.877 3.658"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.877 3.5A3.822 3.822 0 0 0 6.06 7.318a3.778 3.778 0 0 0 1.103 2.695 3.785 3.785 0 0 0 2.686 1.123l.028.75v-.75a3.823 3.823 0 0 0 3.818-3.818A3.823 3.823 0 0 0 9.877 3.5m0 9.136h-.03A5.27 5.27 0 0 1 6.1 11.07a5.269 5.269 0 0 1-1.54-3.755A5.323 5.323 0 0 1 9.877 2a5.324 5.324 0 0 1 5.318 5.318 5.324 5.324 0 0 1-5.318 5.318M19.204 13.43a.75.75 0 0 1-.75-.75V8.669a.75.75 0 0 1 1.5 0v4.01a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.25 11.424h-4.09a.75.75 0 0 1 0-1.5h4.09a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
  </Svg>
)
export default AddUserLightOutline
