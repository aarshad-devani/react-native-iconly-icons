import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DangerBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.75 17.186c.016.029.03.06.043.09.12.294.187.603.204.919a2.809 2.809 0 0 1-.725 2.04 2.805 2.805 0 0 1-1.956.932H8.56a.75.75 0 0 1 0-1.5h10.72c.315-.017.641-.171.88-.436a1.319 1.319 0 0 0 .26-1.35l-7.25-12.686a1.334 1.334 0 0 0-1.812-.528c-.219.12-.398.3-.519.519L3.583 17.882c-.117.318-.109.663.023.976.138.327.395.58.724.714.14.057.283.089.432.097a.75.75 0 0 1-.038 1.499l-.038-.001a2.806 2.806 0 0 1-.922-.205 2.811 2.811 0 0 1-1.539-1.52 2.805 2.805 0 0 1-.015-2.166.618.618 0 0 1 .043-.09L9.53 4.45a2.83 2.83 0 0 1 4.947.009l7.272 12.726ZM12 13.598a.75.75 0 0 0 .75-.75v-2.827a.75.75 0 0 0-1.5 0v2.827c0 .414.336.75.75.75Zm0 3.42a.75.75 0 0 0 .75-.75v-.01a.746.746 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default DangerBroken