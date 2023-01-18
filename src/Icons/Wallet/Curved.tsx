import React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const WalletCurved = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21.171 14.675h-3.886a2.563 2.563 0 0 1 0-5.126h3.856M17.722 12.053h-.297M7.606 8.144h4.06" />
      <Path
        clipRule="evenodd"
        d="M2.714 12.253c0-6.405 2.325-8.539 9.301-8.539 6.975 0 9.3 2.134 9.3 8.54 0 6.403-2.325 8.538-9.3 8.538-6.976 0-9.3-2.135-9.3-8.539Z"
      />
    </G>
  </Svg>
)
export default WalletCurved
