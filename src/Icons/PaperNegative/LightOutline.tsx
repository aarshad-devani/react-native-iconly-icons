import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const PaperNegativeLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.572 3.512A3.086 3.086 0 0 0 4.5 6.509v10.83a2.969 2.969 0 0 0 2.912 3.028l.148-.001h8.012a3.028 3.028 0 0 0 2.979-3.025v-9l-4.635-4.83H7.572Zm-.173 18.355A4.472 4.472 0 0 1 3 17.327V6.49c.057-2.481 2.105-4.48 4.568-4.48h6.667c.204 0 .399.084.54.23l5.067 5.28a.75.75 0 0 1 .209.519v9.3a4.533 4.533 0 0 1-4.471 4.526H7.399Z" />
      <Path d="M19.297 8.984h-2.754a3.332 3.332 0 0 1-3.32-3.325V2.75a.75.75 0 0 1 1.5 0v2.91c0 1.003.818 1.821 1.822 1.824h2.752a.75.75 0 0 1 0 1.5M13.793 14.497h-4.9a.75.75 0 0 1 0-1.5h4.9a.75.75 0 0 1 0 1.5" />
    </G>
  </Svg>
)
export default PaperNegativeLightOutline
