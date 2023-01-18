import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const User2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M9.559 21.456c-3.672 0-6.81-.555-6.81-2.779 0-2.224 3.118-4.228 6.81-4.228 3.671 0 6.807 1.985 6.807 4.208s-3.115 2.8-6.807 2.8ZM9.559 11.278a4.364 4.364 0 1 0-4.364-4.364 4.348 4.348 0 0 0 4.333 4.364h.03Z"
      />
      <Path d="M16.801 10.079a3.289 3.289 0 0 0-.187-6.397M17.46 13.654c1.989 0 3.687 1.348 3.687 2.55 0 .71-.585 1.438-1.475 1.647" />
    </G>
  </Svg>
)
export default User2Curved
