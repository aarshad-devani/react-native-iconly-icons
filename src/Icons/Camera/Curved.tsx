import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const CameraCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        clipRule="evenodd"
        d="M15.438 12.498a3.146 3.146 0 1 0-6.291 0 3.146 3.146 0 0 0 6.291 0Z"
      />
      <Path
        clipRule="evenodd"
        d="M12.293 20.2c8.045 0 9.003-2.41 9.003-7.633 0-3.662-.485-5.62-3.534-6.463a1.927 1.927 0 0 1-.842-.533c-.407-.446-.703-1.813-1.684-2.227-.981-.412-4.921-.393-5.887 0-.964.395-1.278 1.781-1.684 2.227a1.92 1.92 0 0 1-.842.533c-3.05.843-3.534 2.801-3.534 6.462 0 5.224.958 7.634 9.003 7.634Z"
      />
      <Path d="M17.204 9h.01" />
    </G>
  </Svg>
)
export default CameraCurved
