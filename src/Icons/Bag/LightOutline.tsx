import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const BagLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={6} width={20} height={17}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6.54h19.586v16.182H2V6.54Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.716 8.04c-.441 0-1.915.178-2.338 2.462l-.772 6c-.251 1.683-.057 2.901.578 3.638.627.728 1.749 1.082 3.429 1.082h8.348c1.048 0 2.478-.209 3.342-1.207.686-.791.922-1.969.703-3.502l-.78-6.052C18.896 8.97 18.02 8.04 16.896 8.04H6.715Zm9.244 14.682H7.614c-2.143 0-3.636-.525-4.565-1.604-.933-1.082-1.245-2.705-.927-4.823l.776-6.026c.51-2.763 2.375-3.729 3.819-3.729h10.178c1.45 0 3.214.963 3.809 3.664l.788 6.107c.284 1.971-.07 3.552-1.053 4.686-.979 1.128-2.526 1.725-4.477 1.725Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.098 7.82a.75.75 0 0 1-.75-.75 3.574 3.574 0 0 0-3.57-3.57h-.015A3.6 3.6 0 0 0 9.24 4.54a3.595 3.595 0 0 0-1.051 2.53.75.75 0 0 1-1.5 0c0-1.339.544-2.648 1.492-3.593A5.112 5.112 0 0 1 11.76 2h.02a5.075 5.075 0 0 1 5.068 5.07.75.75 0 0 1-.75.75M14.743 12.324h-.046a.75.75 0 0 1 0-1.5c.414 0 .773.336.773.75s-.313.75-.727.75M8.912 12.324h-.045a.75.75 0 0 1 0-1.5c.414 0 .773.336.773.75s-.314.75-.728.75"
      fill={props.fillColor}
    />
  </Svg>
)
export default BagLightOutline
