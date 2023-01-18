import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const ChatLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={1} y={1} width={22} height={22}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1h21.493v21.494H1V1Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.108 19.675c.58 0 1.127.22 1.706.453 3.547 1.64 7.742.894 10.475-1.838 3.606-3.608 3.606-9.477 0-13.083A9.186 9.186 0 0 0 11.75 2.5a9.186 9.186 0 0 0-6.54 2.708C2.473 7.94 1.73 12.135 3.354 15.648c.234.58.46 1.143.46 1.73 0 .584-.2 1.173-.378 1.693-.146.428-.367 1.074-.225 1.216.14.144.79-.083 1.218-.23.515-.176 1.1-.378 1.678-.382Zm5.616 2.82c-1.528 0-3.066-.324-4.505-.99-.424-.17-.82-.33-1.106-.33-.328.002-.769.154-1.195.301-.874.3-1.962.674-2.767-.128-.802-.803-.432-1.888-.134-2.76.147-.43.298-.875.298-1.21 0-.277-.133-.629-.337-1.136C.105 12.197.971 7.322 4.148 4.147A10.674 10.674 0 0 1 11.748 1c2.873 0 5.573 1.117 7.601 3.146 4.192 4.192 4.192 11.012 0 15.204a10.783 10.783 0 0 1-7.625 3.144Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.696 13.163a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.01a1 1 0 1 1 0 2M11.688 13.163a1.003 1.003 0 0 1-1.004-1c0-.553.442-1 .995-1h.009a1 1 0 1 1 0 2M7.678 13.163a1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .995-1h.01a1 1 0 1 1 0 2"
      fill={props.fillColor}
    />
  </Svg>
)
export default ChatLightOutline
