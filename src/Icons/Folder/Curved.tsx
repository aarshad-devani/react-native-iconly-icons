import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const FolderCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7.306 14.574h9.593" />
      <Path
        clipRule="evenodd"
        d="M2.5 7.798c0-2.442 1.25-4.539 3.622-5.025 2.371-.488 4.173-.32 5.67.488 1.498.808 1.069 2 2.608 2.875 1.54.877 4.017-.44 5.635 1.306 1.694 1.828 1.685 4.633 1.685 6.422 0 6.796-3.807 7.335-9.61 7.335-5.803 0-9.61-.47-9.61-7.335V7.798Z"
      />
    </G>
  </Svg>
)
export default FolderCurved
