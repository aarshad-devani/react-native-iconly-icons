import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const UploadLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={8} width={20} height={15}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8.794h20v13.744H2V8.794Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.566 22.538H6.435A4.44 4.44 0 0 1 2 18.103v-4.875a4.44 4.44 0 0 1 4.435-4.434h.933a.75.75 0 0 1 0 1.5h-.933A2.937 2.937 0 0 0 3.5 13.228v4.875a2.938 2.938 0 0 0 2.935 2.935h11.13a2.938 2.938 0 0 0 2.935-2.935V13.22a2.928 2.928 0 0 0-2.924-2.925h-.942a.75.75 0 0 1 0-1.5h.942A4.43 4.43 0 0 1 22 13.22v4.884a4.44 4.44 0 0 1-4.434 4.435"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={11} y={2} width={2} height={14}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 2h1.5v13.541h-1.5V2.001Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.541a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v12.041a.75.75 0 0 1-.75.75"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.085 6.429a.749.749 0 0 1-.531-1.279l2.915-2.928a.77.77 0 0 1 1.062 0l2.916 2.928a.75.75 0 0 1-1.062 1.058L12 3.814 9.616 6.208a.743.743 0 0 1-.53.22"
      fill={props.fillColor}
    />
  </Svg>
)
export default UploadLightOutline
