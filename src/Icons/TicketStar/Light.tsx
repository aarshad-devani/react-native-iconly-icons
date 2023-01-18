import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TicketStarLight = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M17.857 20.417a3.393 3.393 0 0 0 3.393-3.39V14.323a2.24 2.24 0 0 1 0-4.478h0v-2.7a3.392 3.392 0 0 0-3.388-3.396H6.144A3.394 3.394 0 0 0 2.75 7.142v2.791a2.162 2.162 0 0 1 2.24 2.152 2.237 2.237 0 0 1-2.234 2.24H2.75v2.7a3.392 3.392 0 0 0 3.391 3.392h11.716Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="m12.371 9.063.616 1.247c.06.122.176.207.311.227l1.377.201c.341.05.476.468.23.707l-.996.97a.417.417 0 0 0-.12.367l.235 1.37a.414.414 0 0 1-.6.437l-1.232-.647a.412.412 0 0 0-.386 0l-1.23.647a.415.415 0 0 1-.602-.437l.235-1.37a.414.414 0 0 0-.12-.367l-.995-.97a.414.414 0 0 1 .23-.707l1.376-.2a.416.416 0 0 0 .312-.228l.615-1.247a.415.415 0 0 1 .744 0Z"
      stroke={props.fillColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default TicketStarLight
