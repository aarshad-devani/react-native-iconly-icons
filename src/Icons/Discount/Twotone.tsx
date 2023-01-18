import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DiscountTwotone = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M4.794 7.056a2.262 2.262 0 0 1 2.261-2.262h1.03c.595 0 1.168-.236 1.592-.657l.72-.72a2.262 2.262 0 0 1 3.197-.008l.01.008.72.72c.422.42.995.657 1.592.657h1.028a2.262 2.262 0 0 1 2.262 2.262v1.027c0 .598.236 1.17.657 1.594l.72.72c.885.88.89 2.312.01 3.198l-.01.009-.72.72a2.256 2.256 0 0 0-.657 1.592v1.029a2.261 2.261 0 0 1-2.262 2.26h-1.028a2.26 2.26 0 0 0-1.593.659l-.72.719a2.26 2.26 0 0 1-3.198.009l-.009-.01-.719-.718a2.263 2.263 0 0 0-1.593-.658H7.055a2.261 2.261 0 0 1-2.26-2.261v-1.03c0-.595-.238-1.17-.659-1.591l-.719-.72a2.26 2.26 0 0 1-.009-3.198l.01-.01.718-.72c.421-.423.658-.995.658-1.593V7.056"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="m9.43 14.57 5.14-5.14"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M14.567 15.322a.75.75 0 0 1-.53-.22.821.821 0 0 1-.16-.25.717.717 0 0 1 0-.57c.04-.09.09-.17.16-.24.28-.28.78-.28 1.06 0 .07.07.13.15.17.24.03.09.05.19.05.29 0 .102-.02.19-.05.28-.04.09-.1.18-.17.25a.75.75 0 0 1-.53.22ZM9.427 10.183c-.1 0-.19-.021-.28-.061a.82.82 0 0 1-.25-.16.963.963 0 0 1-.16-.25.714.714 0 0 1 0-.57c.04-.09.09-.18.16-.24a.772.772 0 0 1 1.06 0c.14.14.22.33.22.53 0 .1-.01.19-.05.28-.04.09-.1.17-.17.25a.774.774 0 0 1-.53.22Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default DiscountTwotone