import React, { FC } from "react";
import { SvgProps } from "react-native-svg";
import Bold from "./Bold";
import Bulk from "./Bulk";
import Curved from "./Curved";

interface IIconProps {
  variant:
    | "Bold"
    | "Broken"
    | "Bulk"
    | "Curved"
    | "Light"
    | "LightOutline"
    | "Twotone";
  fillColor?: string;
}

const Filter2: FC<SvgProps & IIconProps> = (props) => {
  switch (props.variant) {
    default:
    case "Bold": return <Bold fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Bulk": return <Bulk fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Curved": return <Curved fillColor={props.fillColor ?? "#212121"} {...props} />;
  }
};

export default Filter2;
export const Filter2Bold = Bold;
export const Filter2Bulk = Bulk;
export const Filter2Curved = Curved;
