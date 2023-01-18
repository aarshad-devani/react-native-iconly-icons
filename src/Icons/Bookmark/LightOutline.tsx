import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const BookmarkLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={2} width={18} height={21}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2h17.039v20.847H3V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.342 3.5c-2.55 0-3.842.982-3.842 2.921v14.724c0 .094.054.145.099.171a.187.187 0 0 0 .198.002l6.382-3.58a.753.753 0 0 1 .736.001l6.327 3.574a.187.187 0 0 0 .199-.001.191.191 0 0 0 .098-.172V6.604c0-.767 0-3.104-3.838-3.104H8.34ZM4.699 22.847c-.295 0-.59-.079-.858-.237A1.68 1.68 0 0 1 3 21.145V6.421C3 3.611 4.947 2 8.342 2H14.7c3.392 0 5.338 1.679 5.338 4.604V21.14a1.68 1.68 0 0 1-.842 1.466 1.684 1.684 0 0 1-1.692.014l-5.96-3.367-6.015 3.374c-.26.146-.545.22-.831.22Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.14 10.229H7.822a.75.75 0 0 1 0-1.5h7.317a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
  </Svg>
)
export default BookmarkLightOutline
