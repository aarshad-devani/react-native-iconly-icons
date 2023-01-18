import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ArrowUp3Curved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12.106 11.3v8.95" />
      <Path
        clipRule="evenodd"
        d="M12.1 3.646c-1.256 0-5.27 6.364-4.549 7.086.722.722 8.307.791 9.098 0 .791-.792-3.294-7.086-4.549-7.086Z"
      />
    </G>
  </Svg>
)
export default ArrowUp3Curved
