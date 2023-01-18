import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperFailLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.737 2.762H7.98A3.729 3.729 0 0 0 4.25 6.491V17.34a3.798 3.798 0 0 0 3.822 3.777l.118-.002h7.883a3.768 3.768 0 0 0 3.73-3.775v-9.3l-5.066-5.278Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.474 2.75v2.91a2.574 2.574 0 0 0 2.568 2.574h2.755M13.576 14.648l-3.466-3.466M10.111 14.648l3.466-3.466"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PaperFailLight
