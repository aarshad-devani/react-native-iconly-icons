import React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const FolderLightOutline = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={2} y={2} width={21} height={21}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2h20.697v20.669H2V2Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.643 3.5C4.739 3.5 3.5 4.976 3.5 8.433v7.799c0 3.184 1.758 4.937 4.95 4.937h7.782c3.184 0 4.937-1.753 4.937-4.937v-.003l.027-4.965c0-3.399-1.166-4.724-4.16-4.724h-2.83a3.053 3.053 0 0 1-2.425-1.212l-.914-1.214A1.539 1.539 0 0 0 9.643 3.5h-2Zm8.588 19.169H8.45c-3.978 0-6.45-2.467-6.45-6.437V8.433C2 4.164 3.899 2 7.643 2h2a3.046 3.046 0 0 1 2.425 1.214l.91 1.212c.29.384.748.613 1.229.614h2.828c3.863 0 5.662 1.979 5.662 6.228l-.028 4.967c-.002 3.968-2.468 6.434-6.438 6.434Z"
        fill={props.fillColor}
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.716 15.713H7.98a.75.75 0 0 1 0-1.5h8.735a.75.75 0 0 1 0 1.5"
      fill={props.fillColor}
    />
  </Svg>
)
export default FolderLightOutline
