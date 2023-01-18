import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FolderTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M21.945 15.758c0 3.578-2.109 5.687-5.687 5.687H8.472c-3.588 0-5.696-2.109-5.696-5.687V7.963c0-3.579 1.314-5.687 4.892-5.687h2c.718 0 1.394.338 1.825.913l.913 1.214a2.291 2.291 0 0 0 1.825.912h2.83c3.587 0 4.911 1.826 4.911 5.477l-.027 4.966Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M7.559 14.49h9.593"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default FolderTwotone
