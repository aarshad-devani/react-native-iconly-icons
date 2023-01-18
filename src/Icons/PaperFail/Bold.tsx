import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PaperFailBold = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.055 15.26a.748.748 0 0 0 0-1.05l-1.208-1.22 1.208-1.22a.748.748 0 0 0 0-1.05.724.724 0 0 0-1.05 0l-1.208 1.22-1.208-1.22a.713.713 0 0 0-1.04 0 .748.748 0 0 0 0 1.05l1.208 1.22-1.207 1.22a.748.748 0 0 0 0 1.05c.138.15.326.22.514.22s.386-.07.525-.22l1.208-1.22 1.208 1.22a.73.73 0 0 0 .525.22c.188 0 .376-.07.525-.22Zm5.28-6.234c.234-.003.486-.006.71-.006.257 0 .455.2.455.45v8.04c0 2.48-1.99 4.49-4.455 4.49H8.173C5.59 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2h5.287c.248 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.418 0 .793.003 1.12.006.253.002.477.004.672.004.142 0 .328-.002.528-.004Zm.27-1.46c-.813.003-1.772 0-2.462-.007-1.095 0-1.997-.91-1.997-2.017V2.906c0-.43.518-.645.813-.334l2.916 3.062 1.071 1.125a.477.477 0 0 1-.34.807Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default PaperFailBold