import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const ScanCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M22.582 12.8H1.45M2.996 8.72c.57-3.48 2.29-5.2 5.77-5.77M8.766 20.99c-3.48-.58-5.2-2.29-5.77-5.77v.004c-.122-.72-.19-1.53-.21-2.42M21.245 12.804c-.02.89-.09 1.7-.21 2.42l.002-.004c-.571 3.48-2.291 5.19-5.771 5.77M15.266 2.95c3.48.57 5.2 2.29 5.77 5.77" />
    </G>
  </Svg>
)
export default ScanCurved
