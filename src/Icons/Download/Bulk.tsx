import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DownloadBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M17.554 7.296c2.451 0 4.446 2.06 4.446 4.592v5.032c0 2.525-1.99 4.58-4.436 4.58H6.448C3.996 21.5 2 19.441 2 16.91v-5.033c0-2.525 1.991-4.58 4.438-4.58h11.116Z"
      fill={props.fillColor}
    />
    <Path
      d="m12.546 16.037 2.91-2.967c.3-.307.3-.8-.003-1.107a.762.762 0 0 0-1.089.002l-1.593 1.626V3.282a.777.777 0 0 0-.77-.782.776.776 0 0 0-.77.782v10.309l-1.594-1.626a.762.762 0 0 0-1.089-.002.788.788 0 0 0-.002 1.107l2.91 2.967c.144.148.34.231.544.231a.766.766 0 0 0 .546-.23"
      fill={props.fillColor}
    />
  </Svg>
)
export default DownloadBulk
