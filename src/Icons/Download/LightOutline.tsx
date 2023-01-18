import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const DownloadLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.001 16.541a.75.75 0 0 1-.75-.75V3.751a.75.75 0 0 1 1.5 0v12.04a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.001 16.541a.746.746 0 0 1-.53-.22l-2.917-2.928a.751.751 0 0 1 1.062-1.059l2.385 2.395 2.385-2.395a.749.749 0 1 1 1.062 1.06l-2.916 2.926a.746.746 0 0 1-.53.221"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={7} width={20} height={15}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.733h20v13.744H2V7.733Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.575 21.477H6.435A4.44 4.44 0 0 1 2 17.042v-4.885a4.43 4.43 0 0 1 4.426-4.424h.941a.75.75 0 0 1 0 1.5h-.94A2.928 2.928 0 0 0 3.5 12.157v4.885a2.938 2.938 0 0 0 2.935 2.935h11.14a2.93 2.93 0 0 0 2.925-2.925v-4.884a2.938 2.938 0 0 0-2.934-2.935h-.932a.75.75 0 0 1 0-1.5h.932A4.44 4.44 0 0 1 22 12.168v4.884a4.43 4.43 0 0 1-4.425 4.425"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default DownloadLightOutline
