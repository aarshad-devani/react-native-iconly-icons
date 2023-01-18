import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowLeft2Broken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.256 4.243a.814.814 0 0 1-.002 1.164l-4.866 4.765-.086.073a.847.847 0 0 1-1.097-.077.813.813 0 0 1 .002-1.163l4.865-4.765.086-.074a.847.847 0 0 1 1.098.077Zm.073 14.435a.814.814 0 0 1-.073 1.08.847.847 0 0 1-1.184.001l-7.325-7.176-.076-.084a.81.81 0 0 1 .073-1.08.846.846 0 0 1 1.184-.002l7.326 7.177.075.084Z"
        fill={props.fillColor}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowLeft2Broken
