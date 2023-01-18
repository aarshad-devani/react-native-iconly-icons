import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WalletTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M21.639 14.396H17.59a2.693 2.693 0 0 1-2.693-2.692 2.693 2.693 0 0 1 2.693-2.69h4.048M18.049 11.643h-.312"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M7.748 3h8.643a5.248 5.248 0 0 1 5.248 5.248v7.177a5.248 5.248 0 0 1-5.248 5.247H7.748A5.248 5.248 0 0 1 2.5 15.425V8.248A5.248 5.248 0 0 1 7.748 3Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M7.036 7.538h5.399"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default WalletTwotone
