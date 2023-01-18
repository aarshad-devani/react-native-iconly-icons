import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CallSilentBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.185 14.205C-.246 6.918 2.97 4.74 3.254 4.385c3.069-3.112 3.545-1.695 5.955.752 2.032 2.071-.601 3.058.478 5.516l-3.502 3.552ZM12.09 13.383c3.28 2.693 4.206-1.16 6.529 1.202 2.397 2.447 3.775 2.94.736 6.042-.358.311-2.66 3.842-10.555-3.885l3.29-3.36Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M21.375 3.86v.01l-9.416 9.645-8.515 8.731a.856.856 0 0 1-.594.254.898.898 0 0 1-.605-.254.898.898 0 0 1-.129-1.057l.03-.04c.02-.032.04-.062.07-.092L20.175 2.63a.816.816 0 0 1 .594-.266c.228 0 .446.103.605.266a.894.894 0 0 1 0 1.23"
      fill={props.fillColor}
    />
  </Svg>
)
export default CallSilentBulk
