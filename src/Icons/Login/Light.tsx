import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LoginLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M15.813 12.022H3.77M12.885 9.106l2.928 2.916-2.928 2.916"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.504 7.389v-.933a3.684 3.684 0 0 1 3.685-3.684h4.884a3.675 3.675 0 0 1 3.675 3.675v11.14a3.685 3.685 0 0 1-3.685 3.685h-4.885a3.675 3.675 0 0 1-3.674-3.675v-.942"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default LoginLight
