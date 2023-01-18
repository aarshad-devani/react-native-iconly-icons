import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LoginBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M7.296 6.446C7.296 3.995 9.356 2 11.888 2h5.032c2.525 0 4.58 1.99 4.58 4.436v11.116c0 2.452-2.059 4.448-4.59 4.448h-5.033c-2.525 0-4.58-1.991-4.58-4.438V6.446Z"
      fill={props.fillColor}
    />
    <Path
      d="m16.037 11.454-2.967-2.91a.79.79 0 0 0-1.107.003.762.762 0 0 0 .002 1.089l1.626 1.593H3.282a.777.777 0 0 0-.782.77c0 .426.35.77.782.77h10.309l-1.626 1.594a.762.762 0 0 0-.002 1.089.788.788 0 0 0 1.107.002l2.967-2.91a.766.766 0 0 0 .231-.544.766.766 0 0 0-.23-.546"
      fill={props.fillColor}
    />
  </Svg>
)
export default LoginBulk
