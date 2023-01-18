import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShieldFailTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M18.865 5.124c.437.153.729.565.729 1.028v6.773c0 1.893-.689 3.7-1.903 5.1-.612.705-1.384 1.254-2.205 1.698l-3.558 1.922-3.564-1.923c-.823-.444-1.596-.992-2.208-1.698a7.783 7.783 0 0 1-1.906-5.103V6.152c0-.463.292-.875.729-1.028l6.582-2.313a1.09 1.09 0 0 1 .722 0l6.582 2.313Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.573 9.559a.75.75 0 1 0-1.06 1.06l1.348 1.349-1.348 1.348a.75.75 0 0 0 1.06 1.061l1.35-1.348 1.348 1.348a.75.75 0 0 0 1.06-1.06l-1.348-1.349 1.348-1.349a.75.75 0 0 0-1.06-1.06l-1.349 1.348-1.349-1.348Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ShieldFailTwotone
