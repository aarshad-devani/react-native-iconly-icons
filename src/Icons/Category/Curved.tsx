import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CategoryCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipRule="evenodd"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21 6.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0ZM10.347 6.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0ZM21 17.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0ZM10.347 17.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z" />
    </G>
  </Svg>
)
export default CategoryCurved
