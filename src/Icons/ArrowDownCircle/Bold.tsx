import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ArrowDownCircleBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C6.48 22 2 17.51 2 12 2 6.48 6.48 2 12 2c5.51 0 10 4.48 10 10 0 5.51-4.49 10-10 10Zm4-11.98a.745.745 0 0 0-1.06.01L12 12.98l-2.94-2.95c-.29-.3-.77-.3-1.06-.01-.3.3-.3.77 0 1.06l3.47 3.49a.75.75 0 0 0 1.06 0L16 11.08c.15-.14.22-.33.22-.52 0-.2-.07-.39-.22-.54Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default ArrowDownCircleBold
