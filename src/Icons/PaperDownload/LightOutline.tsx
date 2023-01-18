import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const PaperDownloadLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={2} width={18} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2.012h17.052v19.853H3V2.012Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.573 3.512a3.087 3.087 0 0 0-3.072 2.997v10.719a3.064 3.064 0 0 0 2.99 3.138h8.082a3.097 3.097 0 0 0 2.98-3.133V8.34l-4.635-4.828H7.573Zm.012 18.354H7.46a4.562 4.562 0 0 1-4.458-4.654V6.49c.06-2.481 2.107-4.48 4.57-4.48H14.237c.203 0 .398.084.54.23l5.066 5.278a.753.753 0 0 1 .208.519v9.19a4.594 4.594 0 0 1-4.453 4.638H7.585Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.298 8.984h-2.754a3.331 3.331 0 0 1-3.318-3.325V2.75a.75.75 0 0 1 1.5 0v2.91c0 1.003.816 1.821 1.82 1.824h2.752a.75.75 0 0 1 0 1.5M11.143 16.7a.75.75 0 0 1-.75-.75V9.91a.75.75 0 0 1 1.5 0v6.04a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.142 16.7a.746.746 0 0 1-.531-.222l-2.345-2.354a.751.751 0 0 1 1.063-1.059l1.813 1.822 1.813-1.822a.75.75 0 1 1 1.063 1.06l-2.345 2.353a.746.746 0 0 1-.531.221"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperDownloadLightOutline
