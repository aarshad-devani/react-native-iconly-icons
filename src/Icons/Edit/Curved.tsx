import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const EditCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M13.335 19.508h6.377" />
      <Path
        clipRule="evenodd"
        d="M16.058 4.859v0a3.042 3.042 0 0 0-4.258.607l-6.752 8.995c-1.74 2.318-.094 5.19-.094 5.19s3.244.746 4.958-1.539l6.752-8.995a3.042 3.042 0 0 0-.606-4.258Z"
      />
      <Path d="m10.504 7.211 4.864 3.651" />
    </G>
  </Svg>
)
export default EditCurved
