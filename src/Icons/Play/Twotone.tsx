import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlayTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      clipRule="evenodd"
      d="M15.05 12.467c-.729.786-2.713 2.116-3.728 2.543-.162.068-.575.212-.664.214a.504.504 0 0 1-.459-.27c-.034-.066-.134-.497-.166-.69-.095-.583-.144-1.49-.143-2.402 0-.957.052-1.907.158-2.485.028-.156.11-.515.134-.573a.498.498 0 0 1 .226-.246.494.494 0 0 1 .25-.06c.09.002.451.129.575.178.978.38 3.047 1.758 3.807 2.568.068.073.255.269.286.309a.497.497 0 0 1 .011.602c-.033.045-.224.245-.287.312Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PlayTwotone
