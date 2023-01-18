import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MoreSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.254 2h7.493C19.607 2 22 4.393 22 8.256v7.5C22 19.608 19.608 22 15.747 22H8.244C4.392 22 2 19.608 2 15.753a.766.766 0 0 1 1.53 0c0 3.034 1.67 4.714 4.723 4.714h7.493c3.043 0 4.723-1.671 4.723-4.714v-7.5c0-3.043-1.67-4.723-4.723-4.723H8.253C5.21 3.53 3.53 5.21 3.53 8.253v2.331a.755.755 0 0 1-.756.756h-.011A.763.763 0 0 1 2 10.575V8.253C2 4.393 4.41 2 8.254 2Zm-.734 8.804c.661 0 1.198.537 1.198 1.196a1.199 1.199 0 0 1-2.396 0c0-.66.538-1.196 1.198-1.196Zm4.48 0c.661 0 1.198.537 1.198 1.196a1.199 1.199 0 0 1-2.396 0c0-.66.538-1.196 1.198-1.196ZM17.677 12a1.198 1.198 0 0 0-2.396 0 1.2 1.2 0 0 0 2.396 0Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default MoreSquareBroken
