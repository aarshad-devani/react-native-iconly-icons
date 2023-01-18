import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LoginBroken = (props: SvgProps & { fillColor: string }) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.82 2h5.067C19.43 2 21.5 3.99 21.5 6.437v7.614c0 .425-.36.769-.8.769-.443 0-.802-.344-.802-.77V6.438c0-1.597-1.35-2.897-3.01-2.897H11.82c-1.667 0-3.022 1.304-3.022 2.907v.931c0 .425-.358.769-.8.769-.442 0-.801-.344-.801-.769v-.931C7.198 3.995 9.272 2 11.82 2Zm1.771 8.36a.764.764 0 0 1-1.084.006l-.732-.727a.773.773 0 0 1-.006-1.09.763.763 0 0 1 1.084-.005l.733.728c.3.298.304.786.005 1.088Zm-1.82 5.092a.773.773 0 0 1 .002-1.089l1.592-1.593H3.266A.768.768 0 0 1 2.5 12a.77.77 0 0 1 .766-.77h11.955c.31 0 .59.187.709.476a.775.775 0 0 1-.167.84l-2.908 2.908a.764.764 0 0 1-1.084-.002Zm8.928 1.331c-.442 0-.8.345-.8.77 0 1.603-1.356 2.907-3.022 2.907H11.81c-1.66 0-3.01-1.3-3.01-2.897v-.94c0-.426-.36-.77-.801-.77-.442 0-.8.344-.8.77v.94c0 2.447 2.068 4.437 4.61 4.437h5.068c2.549 0 4.623-1.995 4.623-4.447 0-.425-.36-.77-.801-.77Z"
      fill={props.fillColor}
    />
  </Svg>
)
export default LoginBroken