import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DownloadLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12.122 15.436V3.396M15.038 12.508l-2.916 2.928-2.916-2.928"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.755 8.128h.933a3.684 3.684 0 0 1 3.684 3.685v4.884a3.675 3.675 0 0 1-3.675 3.675H6.557a3.685 3.685 0 0 1-3.685-3.685v-4.885a3.675 3.675 0 0 1 3.675-3.674h.942"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DownloadLight
