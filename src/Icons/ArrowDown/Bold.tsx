import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDownBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.482 4.503.328 3.7c0 .65.532 1.179 1.19 1.179.658 0 1.191-.528 1.191-1.18l.327-3.699C13.518 3.673 12.838 3 12 3a1.51 1.51 0 0 0-1.518 1.503Zm.268 16.011c.056.051.1.09.12.11.322.246.715.376 1.138.376.379 0 .758-.116 1.064-.347.212-.148.554-.49.554-.49 1.327-1.214 3.324-4.231 3.966-5.762.014 0 .394-.91.408-1.343v-.057c0-.665-.379-1.286-.991-1.603-.254-.131-.874-.254-1.168-.313a1.723 1.723 0 0 1-.16-.034c-.874-.13-2.216-.216-3.688-.216-1.546 0-2.945.086-3.805.244-.015 0-.802.16-1.064.261-.38.16-.701.447-.905.809a2 2 0 0 0-.219.91c.015.332.234.953.336 1.198.642 1.617 2.74 4.707 4.024 5.891.133.132.285.27.39.366Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowDownBold