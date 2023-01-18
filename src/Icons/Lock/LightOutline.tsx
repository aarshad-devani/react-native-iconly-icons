import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const LockLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M16.923 10.2a.75.75 0 0 1-.75-.75V7.303a3.805 3.805 0 0 0-3.801-3.801h-.016c-1.013 0-1.962.39-2.679 1.101a3.768 3.768 0 0 0-1.125 2.683V9.45a.75.75 0 0 1-1.5 0V7.303A5.278 5.278 0 0 1 8.62 3.538c1.006-.997 2.334-1.574 3.755-1.536a5.306 5.306 0 0 1 5.298 5.301V9.45a.75.75 0 0 1-.75.75" />
      <Path d="M8.542 10.129A3.045 3.045 0 0 0 5.5 13.17v4.289a3.045 3.045 0 0 0 3.042 3.042h7.641a3.045 3.045 0 0 0 3.042-3.042v-4.29a3.045 3.045 0 0 0-3.042-3.041H8.542Zm7.641 11.873H8.542A4.546 4.546 0 0 1 4 17.46v-4.29A4.546 4.546 0 0 1 8.542 8.63h7.641a4.546 4.546 0 0 1 4.542 4.542v4.289a4.546 4.546 0 0 1-4.542 4.542Z" />
      <Path d="M12.362 17.176a.75.75 0 0 1-.75-.75v-2.221a.75.75 0 0 1 1.5 0v2.22a.75.75 0 0 1-.75.75" />
    </G>
  </Svg>
)
export default LockLightOutline
