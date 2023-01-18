import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const VolumeOffLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="m14.533 9.467-6.82 6.82c-.177-.103-.345-.168-.494-.177-1.297-.094-1.8.056-2.51-.55-.764-.654-.708-2.399-.708-3.677s-.056-3.022.709-3.675c.709-.607 1.212-.448 2.51-.55 1.296-.103 4.038-4.06 6.156-2.809.858.7 1.091 2.006 1.157 4.618Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.533 13.917c-.037 2.874-.261 4.273-1.157 5-.98.58-2.09.047-3.134-.708M4.001 20l3.713-3.713 6.82-6.82L20 4"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default VolumeOffLight
