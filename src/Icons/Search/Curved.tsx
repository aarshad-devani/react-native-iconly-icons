import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SearchCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.275 2.714a8.561 8.561 0 1 1 0 17.122 8.561 8.561 0 0 1 0-17.122ZM19.899 18.488a1.411 1.411 0 1 1-.001 2.822 1.411 1.411 0 0 1 0-2.822Z" />
    </G>
  </Svg>
)
export default SearchCurved
