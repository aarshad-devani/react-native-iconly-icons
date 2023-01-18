import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BookmarkLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M19.739 6.154c0-2.751-1.88-3.854-4.589-3.854H8.791C6.167 2.3 4.2 3.328 4.2 5.97v14.724a.95.95 0 0 0 1.413.828l6.382-3.58 6.327 3.574a.95.95 0 0 0 1.417-.827V6.154Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.271 9.028h7.318"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default BookmarkLight
