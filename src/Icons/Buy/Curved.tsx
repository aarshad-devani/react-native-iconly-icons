import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const BuyCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M5.524 7C9.414 5.744 13.972 5.456 16 5.5c2.028.044 2.883.766 3.5 2 1 2 .789 6.988-1 8.587-1.788 1.6-9.17 1.751-11.63 0-2.599-1.85-1.241-6.895-1.326-10.344C5.595 3.813 3.5 3.5 3.5 3.5M13 10.5h2.773" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.264 20.127a.545.545 0 1 1-.001 1.09.545.545 0 0 1 .001-1.09ZM17.596 20.127a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09Z"
        fill={props.fillColor}
      />
    </G>
  </Svg>
)
export default BuyCurved
