import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CalendarTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M3.093 9.404h17.823"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.808 13.31a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Zm5.197-.75a.75.75 0 0 0 0 1.5h.009a.75.75 0 1 0 0-1.5h-.01Zm4.437 0a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Zm0 3.886a.75.75 0 0 0 0 1.5h.01a.75.75 0 1 0 0-1.5h-.01Zm-5.187.75a.75.75 0 0 1 .75-.75h.009a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Zm-3.697-.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 1 0 0-1.5h-.01Z"
      fill={props.fillColor}
    />
    <Path
      d="M16.044 2v3.29M7.965 2v3.29"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16.238 3.58H7.771C4.834 3.58 3 5.214 3 8.221v9.05C3 20.326 4.834 22 7.771 22h8.458C19.175 22 21 20.355 21 17.347V8.222c.01-3.007-1.816-4.643-4.762-4.643Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default CalendarTwotone
