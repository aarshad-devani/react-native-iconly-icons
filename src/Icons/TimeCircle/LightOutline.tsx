import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const TimeCircleLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
      <Path d="M15.431 15.693a.756.756 0 0 1-.384-.105l-3.77-2.25a.755.755 0 0 1-.366-.644V7.845a.75.75 0 0 1 1.5 0v4.423l3.405 2.03a.752.752 0 0 1-.385 1.395" />
    </G>
  </Svg>
)
export default TimeCircleLightOutline
