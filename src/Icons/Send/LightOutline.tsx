import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const SendLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={3} width={20} height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3h19.499v19.5H2V3Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10.805 14.818 3.657 5.933c.16.26.41.257.51.243a.508.508 0 0 0 .433-.371l4.573-15.445a.522.522 0 0 0-.133-.525.512.512 0 0 0-.512-.132L3.877 9.047a.51.51 0 0 0-.371.433.515.515 0 0 0 .24.52l6.002 3.754 5.302-5.358a.751.751 0 0 1 1.067 1.055l-5.312 5.367Zm4.09 7.682a1.997 1.997 0 0 1-1.71-.962l-3.877-6.291-6.356-3.975a2.004 2.004 0 0 1-.932-1.996 2 2 0 0 1 1.435-1.668L18.91 3.082a2.02 2.02 0 0 1 2.504 2.522l-4.573 15.444a1.997 1.997 0 0 1-1.67 1.433 2.173 2.173 0 0 1-.277.019Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default SendLightOutline
