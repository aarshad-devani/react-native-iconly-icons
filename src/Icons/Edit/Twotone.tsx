import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EditTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M13.7 19.898h6.377"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12.855 4.956c.737-.94 1.928-.89 2.868-.153l1.39 1.09c.94.737 1.273 1.88.536 2.82L9.36 19.29a1.48 1.48 0 0 1-1.15.568l-3.197.04-.724-3.114c-.102-.437 0-.897.277-1.252l8.289-10.575Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="m11.303 6.936 4.794 3.758"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default EditTwotone
