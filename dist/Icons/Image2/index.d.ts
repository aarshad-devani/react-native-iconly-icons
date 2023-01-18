import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Image2: FC<SvgProps & IIconProps>;
export default Image2;
export declare const Image2Bold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Image2Curved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Image2Twotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
