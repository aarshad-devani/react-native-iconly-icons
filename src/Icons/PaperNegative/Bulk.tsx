import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperNegativeBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M18.809 9.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V2.459A.456.456 0 0 0 13.253 2H7.963C5.496 2 3.5 4.026 3.5 6.509v10.775C3.5 19.889 5.591 22 8.17 22h7.876c2.46 0 4.454-2.013 4.454-4.498V9.471a.454.454 0 0 0-.453-.458c-.423.003-.93.008-1.238.008"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M16.084 2.567a.477.477 0 0 0-.821.334v2.637c0 1.106.91 2.016 2.017 2.016.697.008 1.665.01 2.488.008a.477.477 0 0 0 .342-.808l-4.026-4.187"
      fill={props.fillColor}
    />
    <Path
      d="M14.367 14.57H9.424a.745.745 0 1 1 0-1.49h4.943a.746.746 0 0 1 0 1.49"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperNegativeBulk
