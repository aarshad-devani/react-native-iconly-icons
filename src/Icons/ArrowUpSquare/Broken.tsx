import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowUpSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.012 21.232a.766.766 0 0 1-.765.765C4.392 22 2 19.608 2 15.756V8.253C2 4.392 4.392 2 8.244 2h7.5C19.607 2 22 4.392 22 8.253v7.5C22 19.59 19.607 22 15.747 22h-2.57a.757.757 0 0 1-.755-.756v-.009h.017c0-.422.342-.764.764-.765H15.747c3.053 0 4.723-1.67 4.723-4.714v-7.5c0-3.046-1.68-4.726-4.723-4.726h-7.5c-3.034 0-4.714 1.68-4.714 4.723v7.5c0 3.043 1.68 4.714 4.714 4.714.422 0 .765.343.765.765Zm3.738-5.146V9.73l2.467 2.477a.749.749 0 1 0 1.062-1.058L12.53 7.385l-.001-.001a.742.742 0 0 0-.529-.22H12a.063.063 0 0 0-.02.003l-.015.004a.754.754 0 0 0-.251.05.782.782 0 0 0-.23.152h-.001c-.004.003-.009.006-.012.01a.742.742 0 0 0-.221.53v8.173a.75.75 0 0 0 1.5 0ZM8.999 9.864 7.72 11.148a.748.748 0 0 0 .002 1.062.749.749 0 0 0 1.06-.003l1.278-1.284a.751.751 0 0 0-1.062-1.059Z"
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
export default ArrowUpSquareBroken
