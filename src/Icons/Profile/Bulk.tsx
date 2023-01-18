import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ProfileBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M11.997 15.175c-4.313 0-7.997.68-7.997 3.4C4 21.295 7.66 22 11.997 22c4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M11.997 12.584a5.273 5.273 0 0 0 5.292-5.292A5.273 5.273 0 0 0 11.997 2a5.274 5.274 0 0 0-5.292 5.292 5.274 5.274 0 0 0 5.292 5.292"
      fill={props.fillColor}
    />
  </Svg>
)
export default ProfileBulk
