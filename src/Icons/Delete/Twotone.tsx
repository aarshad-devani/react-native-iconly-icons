import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DeleteTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M19.325 9.468s-.543 6.735-.858 9.572c-.15 1.355-.987 2.149-2.358 2.174-2.609.047-5.221.05-7.829-.005-1.319-.027-2.142-.831-2.289-2.162-.317-2.862-.857-9.58-.857-9.58"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.708 6.24H3.75M17.44 6.24a1.648 1.648 0 0 1-1.614-1.325L15.583 3.7a1.28 1.28 0 0 0-1.237-.949h-4.233a1.28 1.28 0 0 0-1.237.95l-.243 1.215A1.648 1.648 0 0 1 7.018 6.24"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DeleteTwotone
