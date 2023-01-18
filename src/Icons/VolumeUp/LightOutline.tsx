import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const VolumeUpLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={5} width={13} height={16}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5h12.02v15.502H2V5Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.208 6.506c-.868 0-1.978.881-2.902 1.615-.889.705-1.591 1.263-2.291 1.315-.31.022-.576.032-.81.04-.747.025-.936.042-1.273.32-.442.363-.435 1.846-.431 2.731l.001.221v.004l-.001.221c-.004.886-.011 2.37.431 2.732.336.278.525.294 1.27.321.235.007.502.017.813.04.7.051 1.402.61 2.291 1.314 1.103.875 2.469 1.96 3.375 1.51.758-.658.839-2.4.839-6.14 0-3.74-.081-5.48-.839-6.139a1.05 1.05 0 0 0-.473-.105m.01 13.996c-1.391 0-2.77-1.095-3.844-1.947-.485-.385-1.218-.967-1.471-.993a14.952 14.952 0 0 0-.754-.037c-.798-.029-1.429-.05-2.171-.662-.992-.817-.983-2.525-.977-3.897l.001-.216-.001-.216c-.006-1.372-.015-3.079.977-3.896.743-.612 1.375-.634 2.175-.66.218-.009.465-.017.752-.038.251-.027.984-.609 1.469-.994 1.399-1.11 3.315-2.628 5.1-1.61a.798.798 0 0 1 .09.061c1.394 1.095 1.456 3.16 1.456 7.353 0 4.194-.062 6.26-1.456 7.355a.722.722 0 0 1-.091.061 2.492 2.492 0 0 1-1.255.336"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={19} y={5} width={4} height={15}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.084 5.904h3.4v13.692h-3.4V5.904Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.833 19.596a.75.75 0 0 1-.615-1.179c2.393-3.44 2.393-7.89 0-11.335a.749.749 0 1 1 1.231-.855c2.713 3.904 2.713 9.147 0 13.048a.75.75 0 0 1-.616.32"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.33 17.187a.75.75 0 0 1-.65-1.123 6.688 6.688 0 0 0 0-6.626.75.75 0 0 1 1.302-.746 8.192 8.192 0 0 1 0 8.118.749.749 0 0 1-.651.377"
      fill={props.fillColor}
    />
  </Svg>
)
export default VolumeUpLightOutline
