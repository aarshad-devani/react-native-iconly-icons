import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreSquareBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.521 10.803c-.66 0-1.198.537-1.198 1.196a1.2 1.2 0 0 0 1.198 1.198A1.2 1.2 0 0 0 8.72 12c0-.66-.537-1.197-1.198-1.197Zm4.48 0c-.662 0-1.199.537-1.199 1.196A1.2 1.2 0 0 0 12 13.197 1.2 1.2 0 0 0 13.198 12c0-.66-.537-1.197-1.198-1.197ZM15.28 12a1.198 1.198 0 0 1 2.397 0 1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default MoreSquareBulk
