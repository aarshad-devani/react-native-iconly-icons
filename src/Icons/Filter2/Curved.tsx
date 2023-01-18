import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Filter2Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M12.004 21c-2.012 0-2.02-2.006-2.02-5.4C9.984 12.205 3 9.827 3 6.1 3 2.954 5.79 3 12 3s9-.047 9 3.1c0 3.727-6.983 6.105-6.983 9.5 0 3.394-.003 5.4-2.013 5.4Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default Filter2Curved
