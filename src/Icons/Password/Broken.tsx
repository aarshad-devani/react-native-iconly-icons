import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PasswordBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.665 2h8.67C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.334 22h-5.38a.75.75 0 0 1 0-1.5h5.38c2.53 0 4.166-1.733 4.166-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416H7.665C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.165 4.416a.75.75 0 0 1 0 1.5C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2Zm-1.198 8.932a.748.748 0 0 1 .992-.376.748.748 0 0 1 .376.991A1.103 1.103 0 1 0 9.942 12c0-.607-.494-1.1-1.102-1.1a.75.75 0 0 1 0-1.5c1.174 0 2.155.783 2.479 1.85h5.691a.75.75 0 0 1 .75.75v1.852a.75.75 0 0 1-1.5 0V12.75h-1.329v1.102a.75.75 0 0 1-1.5 0V12.75H11.32a2.595 2.595 0 0 1-2.479 1.852 2.604 2.604 0 0 1-2.373-3.669Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default PasswordBroken
