import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UnlockBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      d="M8.24 8.71V7.366C8.25 5.37 9.925 3.74 11.998 3.74c1.585 0 3.008.984 3.526 2.456a.906.906 0 0 0 1.138.537.85.85 0 0 0 .508-.438.844.844 0 0 0 .04-.666C16.44 3.462 14.347 2 11.98 2 8.95 2 6.48 4.416 6.46 7.387v1.524l1.778-.202Z"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.769 8.711h8.462c2.358 0 4.269 1.87 4.269 4.176v4.938C20.5 20.13 18.589 22 16.231 22H7.77C5.41 22 3.5 20.13 3.5 17.825v-4.938c0-2.306 1.911-4.176 4.269-4.176Zm4.226 8.618a.88.88 0 0 0 .894-.875v-2.207a.878.878 0 0 0-.894-.864.875.875 0 0 0-.884.864v2.207c0 .487.396.875.884.875Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default UnlockBulk
