import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const BagCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16.364 6.87a4.32 4.32 0 0 0-4.32-4.32 4.32 4.32 0 0 0-4.34 4.3v.02M14.973 11.374h-.046M9.142 11.374h-.046" />
      <Path
        clipRule="evenodd"
        d="M12.034 21.49c-6.508 0-7.257-2.05-8.718-7.468-1.466-5.434 1.475-7.467 8.718-7.467s10.184 2.033 8.718 7.467c-1.46 5.417-2.21 7.467-8.718 7.467Z"
      />
    </G>
  </Svg>
)
export default BagCurved
