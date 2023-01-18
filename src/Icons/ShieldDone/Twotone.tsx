import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShieldDoneTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M18.865 5.124c.437.153.729.565.729 1.028v6.773c0 1.893-.688 3.7-1.903 5.1-.611.705-1.384 1.254-2.205 1.698l-3.558 1.922-3.564-1.923c-.822-.444-1.596-.992-2.208-1.698a7.783 7.783 0 0 1-1.906-5.103V6.152c0-.463.292-.875.729-1.028l6.582-2.313a1.09 1.09 0 0 1 .722 0l6.582 2.313Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="m9.323 11.918 1.891 1.893 3.899-3.898"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ShieldDoneTwotone
