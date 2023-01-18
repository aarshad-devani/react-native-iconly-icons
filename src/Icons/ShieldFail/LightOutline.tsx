import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const ShieldFailLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={4} y={2} width={17} height={21}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2h16.967v20.356H4V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.484 3.5c-.848 0-6.2 1.884-6.816 2.399-.181.182-.188.5-.15 2.627.019 1.026.044 2.421.044 4.353 0 5.201 5.722 7.51 6.92 7.935 1.199-.427 6.924-2.749 6.924-7.935 0-1.93.025-3.324.043-4.35.039-2.129.032-2.447-.161-2.64-.606-.505-5.956-2.389-6.804-2.389m0 18.856a.731.731 0 0 1-.217-.032c-.335-.101-8.205-2.563-8.205-9.445 0-1.92-.025-3.307-.043-4.325-.046-2.54-.056-3.07.599-3.726C5.405 4.041 11.35 2 12.484 2s7.079 2.041 7.865 2.828c.656.656.646 1.186.6 3.729-.018 1.018-.043 2.405-.043 4.322 0 6.882-7.87 9.344-8.205 9.445a.731.731 0 0 1-.217.032"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.363 14.575a.744.744 0 0 1-.53-.22l-3.758-3.758a.749.749 0 1 1 1.06-1.06l3.758 3.758a.749.749 0 0 1-.53 1.28"
      fill={props.fillColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.605 14.575a.75.75 0 0 1-.53-1.28l3.758-3.758a.749.749 0 1 1 1.06 1.06l-3.758 3.758a.744.744 0 0 1-.53.22"
      fill={props.fillColor}
    />
  </Svg>
)
export default ShieldFailLightOutline
