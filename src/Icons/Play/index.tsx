import React, { FC } from "react";
import { SvgProps } from "react-native-svg";
import Bold from "./Bold";
import Broken from "./Broken";
import Bulk from "./Bulk";
import Curved from "./Curved";
import Light from "./Light";
import LightOutline from "./LightOutline";
import Twotone from "./Twotone";

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

const Play: FC<SvgProps & IIconProps> = (props) => {
  switch (props.variant) {
    default:
    case "Bold": return <Bold fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Broken": return <Broken fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Bulk": return <Bulk fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Curved": return <Curved fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Light": return <Light fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "LightOutline": return <LightOutline fillColor={props.fillColor ?? "#212121"} {...props} />;
    case "Twotone": return <Twotone fillColor={props.fillColor ?? "#212121"} {...props} />;
  }
};

export default Play;
export const PlayBold = Bold;
export const PlayBroken = Broken;
export const PlayBulk = Bulk;
export const PlayCurved = Curved;
export const PlayLight = Light;
export const PlayLightOutline = LightOutline;
export const PlayTwotone = Twotone;
