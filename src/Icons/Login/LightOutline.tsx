import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const LoginLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M15.791 12.75H3.75a.75.75 0 0 1 0-1.5h12.041a.75.75 0 0 1 0 1.5" />
      <Path d="M12.863 15.665a.749.749 0 0 1-.529-1.281L14.728 12l-2.394-2.385a.749.749 0 1 1 1.058-1.062l2.93 2.916a.746.746 0 0 1 0 1.062l-2.93 2.915a.747.747 0 0 1-.529.219" />
      <Path d="M17.042 22h-4.885a4.43 4.43 0 0 1-4.424-4.425v-.942a.75.75 0 0 1 1.5 0v.942a2.929 2.929 0 0 0 2.924 2.925h4.885a2.939 2.939 0 0 0 2.936-2.936V6.425A2.93 2.93 0 0 0 17.053 3.5h-4.885a2.938 2.938 0 0 0-2.935 2.934v.933a.75.75 0 0 1-1.5 0v-.933A4.44 4.44 0 0 1 12.168 2h4.885a4.43 4.43 0 0 1 4.425 4.425v11.139A4.442 4.442 0 0 1 17.042 22" />
    </G>
  </Svg>
)
export default LoginLightOutline
