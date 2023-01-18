import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Voice2: FC<SvgProps & IIconProps>;
export default Voice2;
export declare const Voice2Bold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Voice2Curved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Voice2Twotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
