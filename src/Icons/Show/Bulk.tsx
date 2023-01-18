import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShowBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      opacity={0.4}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.737 6.046c1.707 1.318 3.16 3.249 4.205 5.663a.729.729 0 0 1 0 .572C19.854 17.111 16.137 20 12 20h-.01c-4.127 0-7.844-2.89-9.931-7.719a.728.728 0 0 1 0-.572C4.146 6.88 7.863 4 11.99 4H12c2.068 0 4.03.718 5.737 2.046ZM8.097 12c0 2.133 1.747 3.87 3.903 3.87 2.146 0 3.893-1.737 3.893-3.87A3.888 3.888 0 0 0 12 8.121c-2.156 0-3.902 1.736-3.902 3.879Z"
      fill={props.fillColor}
    />
    <Path
      d="M14.431 11.997a2.428 2.428 0 0 1-2.43 2.415c-1.346 0-2.438-1.087-2.438-2.415 0-.165.02-.319.049-.474h.048a1.997 1.997 0 0 0 2-1.921c.108-.019.225-.03.342-.03a2.43 2.43 0 0 1 2.429 2.425"
      fill={props.fillColor}
    />
  </Svg>
)
export default ShowBulk
