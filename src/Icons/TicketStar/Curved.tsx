import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const TicketStarCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21.44 13.994c-2.661 0-2.661-4.114 0-4.114 0-4.768 0-6.47-9.395-6.47S2.65 5.113 2.65 9.88c2.66 0 2.66 4.114 0 4.114 0 4.768 0 6.47 9.395 6.47s9.395-1.702 9.395-6.47Z" />
      <Path d="M12.045 9.171c-.683 0-.748 1.09-1.154 1.475-.407.385-1.67-.055-1.846.628-.175.684.962.916 1.103 1.503.14.586-.554 1.41.039 1.822.594.409 1.233-.519 1.858-.519s1.264.928 1.858.519c.594-.412-.101-1.236.039-1.822.14-.587 1.278-.819 1.103-1.503-.176-.683-1.44-.243-1.846-.628-.406-.385-.471-1.475-1.154-1.475Z" />
    </G>
  </Svg>
)
export default TicketStarCurved
