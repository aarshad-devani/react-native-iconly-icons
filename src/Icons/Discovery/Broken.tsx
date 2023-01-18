import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DiscoveryBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.242 9.817A9.99 9.99 0 0 1 11.996 2c.732 0 1.461.082 2.175.246a9.97 9.97 0 0 1 6.283 4.41 9.992 9.992 0 0 1 1.293 7.574.78.78 0 1 1-1.508-.387 8.412 8.412 0 0 0-5.474-9.794A8.397 8.397 0 0 0 4.44 8.423a8.416 8.416 0 0 0 3.21 10.753 8.394 8.394 0 0 0 11.027-2.014.78.78 0 0 1 1.21.957A9.98 9.98 0 0 1 7.741 21.05a10.003 10.003 0 0 1-5.5-11.233Zm9.89 4.6a.782.782 0 0 1 .303-1.004l.587-.29.982-3.143-3.069.966-1.403 4.486a.772.772 0 1 1-1.473-.465l1.526-4.881a.78.78 0 0 1 .508-.5l4.876-1.528a.674.674 0 0 1 .456 0 .763.763 0 0 1 .508.965l-1.56 4.89a.772.772 0 0 1-.395.466l-.877.439a.78.78 0 0 1-.969-.4Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default DiscoveryBroken
