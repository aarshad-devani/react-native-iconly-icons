import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const ShieldDoneLightOutline = (props: SvgProps & { fillColor: string }) => (
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
        d="M12.484 3.5c-.848 0-6.198 1.884-6.815 2.399-.182.183-.19.501-.15 2.63.018 1.026.043 2.42.043 4.35 0 5.201 5.722 7.51 6.92 7.935 1.199-.427 6.924-2.749 6.924-7.935 0-1.932.025-3.327.044-4.353.038-2.127.03-2.445-.162-2.637-.605-.505-5.956-2.389-6.804-2.389m0 18.856a.731.731 0 0 1-.217-.032c-.335-.101-8.205-2.563-8.205-9.445 0-1.917-.025-3.304-.043-4.322-.046-2.543-.056-3.073.6-3.729C5.406 4.041 11.35 2 12.485 2c1.133 0 7.078 2.041 7.865 2.828.656.656.646 1.186.6 3.726-.018 1.018-.043 2.405-.043 4.325 0 6.882-7.87 9.344-8.205 9.445a.731.731 0 0 1-.217.032"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.777 14.52a.75.75 0 0 1-.53-.22l-1.893-1.895a.751.751 0 0 1 1.062-1.06l1.361 1.362 3.368-3.368a.749.749 0 1 1 1.06 1.061l-3.898 3.9a.747.747 0 0 1-.53.22"
      fill={props.fillColor}
    />
  </Svg>
)
export default ShieldDoneLightOutline
