import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EditLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M13.747 20.443H21"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12.78 3.795a2.245 2.245 0 0 1 3.116-.303l1.733 1.347a2.142 2.142 0 0 1 .72 2.984c-.034.054-9.537 11.942-9.537 11.942a1.699 1.699 0 0 1-1.31.632l-3.638.046-.82-3.47c-.115-.489 0-1.001.316-1.396l9.42-11.782Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m11.02 6 5.453 4.188"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default EditLight
