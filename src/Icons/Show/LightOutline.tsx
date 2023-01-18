import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const ShowLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 9.641a2.414 2.414 0 0 0-2.411 2.412 2.413 2.413 0 0 0 2.41 2.41 2.414 2.414 0 0 0 2.413-2.41A2.415 2.415 0 0 0 12 9.641m0 6.322a3.915 3.915 0 0 1-3.911-3.91 3.916 3.916 0 0 1 3.91-3.912 3.917 3.917 0 0 1 3.913 3.912A3.915 3.915 0 0 1 12 15.963"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={4} width={20} height={17}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4h20v16.105H2V4Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.57 12.053c1.86 4.108 4.993 6.552 8.43 6.552 3.437 0 6.57-2.444 8.43-6.553-1.86-4.107-4.993-6.55-8.43-6.551-3.436 0-6.57 2.444-8.43 6.551Zm8.432 8.052h-.005c-4.136-.003-7.85-2.902-9.936-7.757a.751.751 0 0 1 0-.591C4.147 6.903 7.862 4.004 11.997 4h.006c4.136.003 7.85 2.902 9.936 7.756a.743.743 0 0 1 0 .591c-2.085 4.855-5.8 7.754-9.936 7.757h-.001Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default ShowLightOutline
