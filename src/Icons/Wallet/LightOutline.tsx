import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const WalletLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.889 15.896H17.84a3.446 3.446 0 0 1-3.442-3.44 3.447 3.447 0 0 1 3.442-3.442h4.048a.75.75 0 0 1 0 1.5H17.84a1.945 1.945 0 0 0-1.942 1.942c0 1.069.872 1.94 1.942 1.94h4.048a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.298 13.144h-.312a.75.75 0 0 1 0-1.5h.312a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={3} width={21} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3h20.639v19.173H2V3Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.998 4.5A4.503 4.503 0 0 0 3.5 8.998v7.177a4.503 4.503 0 0 0 4.498 4.498h8.643a4.503 4.503 0 0 0 4.498-4.498V8.998A4.503 4.503 0 0 0 16.642 4.5H7.998Zm8.643 17.673H7.998A6.005 6.005 0 0 1 2 16.175V8.998A6.005 6.005 0 0 1 7.998 3h8.643a6.004 6.004 0 0 1 5.998 5.998v7.177a6.004 6.004 0 0 1-5.997 5.998Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.685 9.038h-5.4a.75.75 0 0 1 0-1.5h5.4a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
  </Svg>
)
export default WalletLightOutline
