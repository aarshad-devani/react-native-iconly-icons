import React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const SettingTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="m20.807 7.623-.623-1.08a1.913 1.913 0 0 0-2.608-.705v0a1.904 1.904 0 0 1-2.61-.677 1.832 1.832 0 0 1-.255-.915v0a1.913 1.913 0 0 0-1.914-1.968h-1.254A1.904 1.904 0 0 0 9.64 4.19v0a1.913 1.913 0 0 1-1.913 1.885 1.83 1.83 0 0 1-.916-.256v0a1.913 1.913 0 0 0-2.608.705l-.669 1.098a1.913 1.913 0 0 0 .696 2.61v0a1.913 1.913 0 0 1 0 3.313v0a1.904 1.904 0 0 0-.696 2.6v0l.632 1.088a1.913 1.913 0 0 0 2.609.742v0a1.894 1.894 0 0 1 2.6.695c.164.278.252.593.255.916v0c0 1.056.857 1.913 1.913 1.913h1.255c1.053 0 1.908-.851 1.912-1.904v0a1.904 1.904 0 0 1 1.914-1.913c.321.009.636.096.915.256v0a1.913 1.913 0 0 0 2.609-.695v0l.659-1.099a1.904 1.904 0 0 0-.696-2.609v0a1.904 1.904 0 0 1-.696-2.608c.166-.29.406-.53.696-.696v0a1.913 1.913 0 0 0 .696-2.6v0-.009Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      opacity={0.4}
      cx={12.175}
      cy={11.889}
      r={2.636}
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default SettingTwotone
