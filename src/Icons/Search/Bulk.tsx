import React from "react"
import Svg, { SvgProps, Ellipse, Path } from "react-native-svg"
const SearchBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Ellipse
      cx={10.599}
      cy={10.653}
      rx={8.599}
      ry={8.653}
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M20.674 21.955a1.32 1.32 0 0 1-.889-.384l-2.036-2.38a1.088 1.088 0 0 1-.08-1.522.975.975 0 0 1 1.387 0l2.561 2.05c.37.377.483.937.29 1.43a1.335 1.335 0 0 1-1.18.851l-.053-.045Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default SearchBulk
