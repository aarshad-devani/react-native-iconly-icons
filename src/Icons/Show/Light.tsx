import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShowLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M15.161 12.053a3.162 3.162 0 1 1-6.323-.001 3.162 3.162 0 0 1 6.323.001Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M11.998 19.355c3.808 0 7.291-2.738 9.252-7.302-1.961-4.564-5.444-7.302-9.252-7.302h.004c-3.808 0-7.291 2.738-9.252 7.302 1.961 4.564 5.444 7.302 9.252 7.302h-.004Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ShowLight
