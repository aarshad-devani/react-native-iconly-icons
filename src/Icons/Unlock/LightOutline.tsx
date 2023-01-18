import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const UnlockLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.803 10.198a.75.75 0 0 1-.75-.75V7.301c.013-2.938 2.389-5.3 5.302-5.3h.02a5.305 5.305 0 0 1 5.009 3.566.75.75 0 1 1-1.418.49A3.805 3.805 0 0 0 12.372 3.5h-.014a3.806 3.806 0 0 0-3.805 3.784v2.164a.75.75 0 0 1-.75.75" />
      <Path d="M8.542 10.127A3.045 3.045 0 0 0 5.5 13.17v4.288a3.045 3.045 0 0 0 3.042 3.043h7.642a3.046 3.046 0 0 0 3.042-3.043V13.17a3.046 3.046 0 0 0-3.042-3.043H8.542Zm7.642 11.874H8.542A4.547 4.547 0 0 1 4 17.458V13.17a4.547 4.547 0 0 1 4.542-4.543h7.642a4.548 4.548 0 0 1 4.542 4.543v4.288a4.548 4.548 0 0 1-4.542 4.543Z" />
      <Path d="M12.363 17.175a.75.75 0 0 1-.75-.75v-2.222a.75.75 0 0 1 1.5 0v2.222a.75.75 0 0 1-.75.75" />
    </G>
  </Svg>
)
export default UnlockLightOutline
