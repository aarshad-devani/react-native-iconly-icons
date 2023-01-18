import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperDownloadLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.737 2.762H8.085A3.82 3.82 0 0 0 4.25 6.49v10.737a3.807 3.807 0 0 0 3.724 3.887h8.098a3.867 3.867 0 0 0 3.73-3.887v-9.19l-5.066-5.276Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.475 2.75v2.91a2.575 2.575 0 0 0 2.569 2.574h2.754M11.642 15.95V9.909M9.296 13.595l2.345 2.354 2.345-2.354"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PaperDownloadLight
