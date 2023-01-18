import React from "react"
import Svg, { SvgProps, G, Path, Mask } from "react-native-svg"
const BuyLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="m6.328 8.347.603 7.172c.044.552.495.966 1.046.966h10.917c.52 0 .966-.388 1.04-.903l.95-6.559a.587.587 0 0 0-.112-.438.58.58 0 0 0-.388-.23c-.21.007-8.882-.005-14.056-.008Zm1.647 9.638a2.562 2.562 0 0 1-2.54-2.343L4.52 4.748l-1.507-.26A.752.752 0 0 1 2.4 3.62a.76.76 0 0 1 .867-.61l2.08.36c.335.058.59.336.619.676l.235 2.801c14.276.006 14.322.013 14.39.021a2.083 2.083 0 0 1 1.382.82c.334.447.474.998.394 1.55l-.95 6.558a2.562 2.562 0 0 1-2.522 2.19H7.975Z" />
      <Path d="M17.287 12.044h-2.772a.75.75 0 1 1 0-1.5h2.772a.75.75 0 0 1 0 1.5M7.545 20.702a.543.543 0 1 1 0 1.089.544.544 0 1 1 0-1.09" />
    </G>
    <Mask id="a" maskUnits="userSpaceOnUse" x={6} y={20} width={3} height={2}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.999 21.245a.544.544 0 1 0 1.09 0 .543.543 0 0 0-.544-.544.544.544 0 0 0-.546.544Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 26.79h11.089V15.701H1.999v11.09Z"
        fill={props.fillColor}
      />
    </G>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.fillColor}>
      <Path d="M7.544 21.04a.205.205 0 0 0-.205.206c0 .227.41.227.41 0a.206.206 0 0 0-.205-.205m0 1.5a1.296 1.296 0 0 1 0-2.59 1.296 1.296 0 0 1 0 2.59M18.825 20.702a.544.544 0 1 1 .002 1.088.544.544 0 0 1-.002-1.088" />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={18} y={20} width={2} height={2}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.28 21.245a.546.546 0 1 0 1.09 0 .545.545 0 0 0-.545-.544.544.544 0 0 0-.545.544Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.28 26.79h11.09V15.701H13.28v11.09Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.824 21.04a.205.205 0 0 0-.204.206c0 .229.41.227.41 0a.206.206 0 0 0-.206-.205m0 1.5a1.296 1.296 0 0 1 0-2.59c.715 0 1.296.58 1.296 1.295 0 .714-.581 1.295-1.296 1.295"
      fill={props.fillColor}
    />
  </Svg>
)
export default BuyLightOutline
