import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CallingBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M14.418 5.49a.854.854 0 0 0-1.004.68.862.862 0 0 0 .678 1.01 3.462 3.462 0 0 1 2.743 2.75.86.86 0 0 0 1.006.681.865.865 0 0 0 .677-1.01 5.174 5.174 0 0 0-4.1-4.111"
      fill={props.fillColor}
    />
    <Path
      d="M14.356 2.008a.817.817 0 0 0-.625.176.852.852 0 0 0-.323.584.86.86 0 0 0 .757.95 6.912 6.912 0 0 1 6.126 6.139.857.857 0 1 0 1.704-.192c-.454-4.058-3.595-7.206-7.639-7.657"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.032 12.972c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.993 7.644 2.762 5.172 3.074 4.784c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default CallingBold
