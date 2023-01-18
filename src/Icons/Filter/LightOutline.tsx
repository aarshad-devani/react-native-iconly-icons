import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const FilterLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.08 18.593H3.78a.75.75 0 0 1 0-1.5h6.301a.75.75 0 0 1 0 1.5M19.19 8.9h-6.3a.75.75 0 0 1 0-1.5h6.3a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={5} width={7} height={7}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5h6.226v6.192H3V5Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.113 6.5c-.89 0-1.613.716-1.613 1.597 0 .88.724 1.595 1.613 1.595.89 0 1.613-.715 1.613-1.595 0-.881-.723-1.597-1.613-1.597m0 4.692C4.397 11.192 3 9.804 3 8.097A3.11 3.11 0 0 1 6.113 5a3.109 3.109 0 0 1 3.113 3.097c0 1.707-1.396 3.095-3.113 3.095"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.388 16.208c-.89 0-1.614.716-1.614 1.596 0 .881.724 1.596 1.614 1.596.889 0 1.612-.715 1.612-1.596 0-.88-.723-1.596-1.612-1.596m0 4.692c-1.717 0-3.114-1.389-3.114-3.096s1.397-3.096 3.114-3.096a3.108 3.108 0 0 1 3.112 3.096 3.108 3.108 0 0 1-3.112 3.096"
      fill={props.fillColor}
    />
  </Svg>
)
export default FilterLightOutline
