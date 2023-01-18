import React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRightSquareBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.768 9.012a.766.766 0 0 1-.765-.765C2 4.392 4.392 2 8.243 2h7.504C19.607 2 22 4.392 22 8.244v7.5C22 19.607 19.608 22 15.747 22h-7.5C4.41 22 2 19.607 2 15.747v-2.569c0-.417.339-.756.756-.756h.009v.017c.422 0 .764.342.765.764V15.747c0 3.053 1.67 4.723 4.714 4.723h7.5c3.046 0 4.726-1.68 4.726-4.723v-7.5c0-3.034-1.68-4.714-4.723-4.714h-7.5c-3.043 0-4.714 1.68-4.714 4.714a.766.766 0 0 1-.765.765Zm5.146 3.738h6.356l-2.477 2.467a.749.749 0 1 0 1.058 1.062l3.764-3.748v-.001a.742.742 0 0 0 .22-.529V12c0-.007 0-.013-.003-.019-.001-.005-.003-.01-.003-.016a.754.754 0 0 0-.051-.251.782.782 0 0 0-.144-.22l-.008-.01a.742.742 0 0 0-.54-.233H7.914a.75.75 0 0 0 0 1.499Zm6.222-3.751L12.852 7.72a.748.748 0 0 0-1.062.002.749.749 0 0 0 .003 1.06l1.284 1.278a.751.751 0 0 0 1.059-1.062Z"
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
export default ArrowRightSquareBroken
