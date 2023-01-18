import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const PaperPlusLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.573 3.512A3.086 3.086 0 0 0 4.5 6.509v10.83a2.97 2.97 0 0 0 2.913 3.028l.147-.001h8.012a3.028 3.028 0 0 0 2.979-3.025v-9l-4.634-4.83H7.573ZM7.4 21.867a4.473 4.473 0 0 1-4.4-4.54V6.49c.058-2.481 2.107-4.48 4.57-4.48h6.667c.204 0 .399.084.54.23l5.067 5.28a.753.753 0 0 1 .208.519v9.3a4.533 4.533 0 0 1-4.471 4.526H7.4Z" />
      <Path d="M19.298 8.984h-2.754a3.332 3.332 0 0 1-3.32-3.325V2.75a.75.75 0 0 1 1.5 0v2.91c0 1.003.818 1.821 1.822 1.824h2.752a.75.75 0 0 1 0 1.5M13.793 13.664H8.896a.75.75 0 0 1 0-1.5h4.899a.75.75 0 0 1 0 1.5" />
      <Path d="M11.345 16.114a.75.75 0 0 1-.75-.75v-4.9a.75.75 0 0 1 1.5 0v4.9a.75.75 0 0 1-.75.75" />
    </G>
  </Svg>
)
export default PaperPlusLightOutline
