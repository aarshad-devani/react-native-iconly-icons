import React from "react"
import Svg, { SvgProps, Path, Mask, G } from "react-native-svg"
const WorkLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.995 17.427a.75.75 0 0 1-.75-.75V14.14a.75.75 0 0 1 1.5 0v2.537a.75.75 0 0 1-.75.75"
      fill={props.fillColor}
    />
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={4} width={20} height={11}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.58h19.99v10.311H2V4.581Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 11.393c2.376 1.291 5.372 1.998 8.49 1.998 3.124 0 6.123-.707 8.5-1.998V8.391a2.307 2.307 0 0 0-2.3-2.31H5.81a2.308 2.308 0 0 0-2.31 2.3v3.012Zm8.49 3.498c-3.545 0-6.962-.858-9.619-2.414a.748.748 0 0 1-.37-.647V8.381a3.81 3.81 0 0 1 3.81-3.8h12.38c2.095 0 3.8 1.708 3.8 3.81v3.44a.75.75 0 0 1-.372.646c-2.657 1.556-6.077 2.414-9.629 2.414Z"
        fill={props.fillColor}
      />
    </G>
    <Mask id="b" maskUnits="userSpaceOnUse" x={7} y={2} width={10} height={5}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.745 2h8.5v4.076h-8.5V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.495 6.076a.75.75 0 0 1-.75-.75V4.96c0-.805-.655-1.46-1.46-1.46h-2.58c-.805 0-1.46.655-1.46 1.46v.366a.75.75 0 0 1-1.5 0V4.96A2.964 2.964 0 0 1 10.705 2h2.58a2.964 2.964 0 0 1 2.96 2.96v.366a.75.75 0 0 1-.75.75"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.795 21.74h-11.6a4.008 4.008 0 0 1-3.979-3.69l-.19-2.51a.751.751 0 0 1 .692-.805c.415-.015.773.278.805.692l.19 2.508a2.503 2.503 0 0 0 2.482 2.305h11.6a2.502 2.502 0 0 0 2.483-2.305l.19-2.508c.032-.414.4-.708.805-.692a.75.75 0 0 1 .691.805l-.19 2.51a4.008 4.008 0 0 1-3.979 3.69"
      fill={props.fillColor}
    />
  </Svg>
)
export default WorkLightOutline
