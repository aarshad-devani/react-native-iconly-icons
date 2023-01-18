import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const TicketLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6 8.17a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v2.42a.75.75 0 0 1-.75.75M13.6 21.284a.75.75 0 0 1-.75-.75v-2.023a.75.75 0 1 1 1.5 0v2.023a.75.75 0 0 1-.75.75M13.6 15.825a.75.75 0 0 1-.75-.75v-4.82a.75.75 0 0 1 1.5 0v4.82a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={1} y={4} width={22} height={18}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4h21.5v17.5H1V4Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 15.554v1.939C2.5 18.875 3.643 20 5.048 20h13.404C19.857 20 21 18.875 21 17.493v-1.94a2.91 2.91 0 0 1-2.177-2.802c0-1.343.925-2.474 2.177-2.803l-.001-1.941c0-1.382-1.143-2.507-2.548-2.507H5.049c-1.405 0-2.548 1.125-2.548 2.507L2.5 10.025c1.267.31 2.177 1.397 2.177 2.726A2.91 2.91 0 0 1 2.5 15.554M18.452 21.5H5.048C2.816 21.5 1 19.702 1 17.493V14.9a.75.75 0 0 1 .75-.75c.787 0 1.427-.628 1.427-1.4 0-.75-.614-1.316-1.427-1.316a.749.749 0 0 1-.75-.75l.001-2.678C1.001 5.797 2.817 4 5.049 4h13.402c2.232 0 4.048 1.798 4.048 4.007L22.5 10.6a.749.749 0 0 1-.75.75c-.787 0-1.427.628-1.427 1.4 0 .772.64 1.4 1.427 1.4a.75.75 0 0 1 .75.75v2.592c0 2.209-1.816 4.007-4.048 4.007"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default TicketLightOutline
