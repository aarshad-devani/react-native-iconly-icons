import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LockBulk = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.769 8.714h8.462c2.358 0 4.269 1.87 4.269 4.175v4.936c0 2.306-1.911 4.175-4.269 4.175H7.77C5.41 22 3.5 20.13 3.5 17.825V12.89c0-2.306 1.911-4.175 4.269-4.175Zm4.226 8.615a.88.88 0 0 0 .894-.874v-2.206a.878.878 0 0 0-.894-.865.875.875 0 0 0-.884.865v2.206c0 .487.396.875.884.875Z"
      fill={props.fillColor}
    />
    <Path
      opacity={0.4}
      d="M17.523 7.396v1.47c-.356-.099-.732-.148-1.118-.148h-.66V7.396c0-2.017-1.677-3.657-3.74-3.657s-3.74 1.63-3.75 3.637v1.342h-.65c-.396 0-.772.05-1.128.159V7.396C6.487 4.415 8.957 2 11.985 2c3.069 0 5.538 2.415 5.538 5.396"
      fill={props.fillColor}
    />
  </Svg>
)
export default LockBulk
