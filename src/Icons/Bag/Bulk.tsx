import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BagBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m20.913 16.315-.769-6.195C19.676 7.91 18.35 7 17.087 7H6.932c-1.282 0-2.652.846-3.05 3.12l-.777 6.195C2.469 20.863 4.81 22 7.869 22h8.29c3.049 0 5.32-1.646 4.754-5.685ZM9.097 12.149a.897.897 0 0 1-.884-.91c0-.502.396-.91.884-.91s.884.408.884.91-.396.91-.884.91Zm4.905-.91c0 .502.396.91.884.91a.897.897 0 0 0 .884-.91.897.897 0 0 0-.884-.91.897.897 0 0 0-.884.91Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M16.974 6.774A.502.502 0 0 1 16.93 7h-1.437a.648.648 0 0 1-.043-.226 3.478 3.478 0 0 0-3.484-3.472 3.478 3.478 0 0 0-3.484 3.472.649.649 0 0 1 0 .226H7.01a.649.649 0 0 1 0-.226A4.992 4.992 0 0 1 12.005 2 4.992 4.992 0 0 1 17 6.774h-.026Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default BagBulk
