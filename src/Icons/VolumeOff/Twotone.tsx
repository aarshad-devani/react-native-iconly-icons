import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VolumeOffTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M6.095 16.65a1.762 1.762 0 0 1-.635-.341c-.765-.653-.71-2.397-.71-3.676 0-1.278-.055-3.023.71-3.675.709-.607 1.213-.448 2.51-.551 1.296-.103 4.039-4.058 6.156-2.808.485.394.77.982.938 1.887M15.284 14.668c-.038 2.873-.263 4.271-1.158 5-.98.579-2.09.047-3.134-.71"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="m4.752 20.75 3.713-3.713 6.819-6.82L20.75 4.75"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default VolumeOffTwotone
