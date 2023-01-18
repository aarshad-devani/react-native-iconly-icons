import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const PaperFailLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={2} width={18} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2.012h17.052v19.855H3V2.012Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.479 3.512a2.983 2.983 0 0 0-2.98 2.979V17.34c.006.81.328 1.575.907 2.148.578.57 1.375.899 2.16.879l.124-.001h7.882a3.027 3.027 0 0 0 2.98-3.025v-9l-4.636-4.83H7.48Zm.064 18.355c-1.2 0-2.335-.465-3.192-1.313A4.52 4.52 0 0 1 3 17.344V6.49a4.484 4.484 0 0 1 4.479-4.48h6.757c.204 0 .4.084.541.23l5.066 5.28a.75.75 0 0 1 .209.519v9.3a4.532 4.532 0 0 1-4.471 4.526H7.543Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.297 8.984H16.54a3.33 3.33 0 0 1-3.317-3.325V2.75a.75.75 0 0 1 1.5 0v2.91c0 1.003.816 1.821 1.819 1.824h2.754a.75.75 0 0 1 0 1.5M13.075 15.399a.744.744 0 0 1-.53-.22L9.08 11.712a.749.749 0 1 1 1.06-1.06l3.466 3.465a.749.749 0 0 1-.53 1.28"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.61 15.399a.749.749 0 0 1-.53-1.28l3.466-3.466a.749.749 0 1 1 1.06 1.06l-3.466 3.466a.744.744 0 0 1-.53.22"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperFailLightOutline
