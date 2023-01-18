import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VideoBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M21.33 7.443a1.383 1.383 0 0 0-1.372-.064l-1.482.748a1.618 1.618 0 0 0-.888 1.456v5.833c0 .621.34 1.179.888 1.457l1.48.747a1.372 1.372 0 0 0 1.375-.063c.419-.263.669-.719.669-1.218V8.662c0-.5-.25-.956-.67-1.22"
      fill={props.fillColor}
    />
    <Path
      d="M11.905 20H6.113C3.691 20 2 18.33 2 15.94V9.06C2 6.67 3.691 5 6.113 5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06"
      fill={props.fillColor}
    />
  </Svg>
)
export default VideoBulk
