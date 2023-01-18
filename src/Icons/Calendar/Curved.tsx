import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CalendarCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M2.75 12.775c0-6.956 2.319-9.274 9.274-9.274 6.956 0 9.275 2.318 9.275 9.274 0 6.957-2.32 9.274-9.275 9.274S2.75 19.732 2.75 12.775Z"
      />
      <Path d="M3.025 9.324h18.008M16.428 13.261h.01M12.029 13.261h.009M7.621 13.261h.01M16.428 17.113h.01M12.029 17.113h.009M7.621 17.113h.01M16.033 2.05v3.262M8.025 2.05v3.262" />
    </G>
  </Svg>
)
export default CalendarCurved
