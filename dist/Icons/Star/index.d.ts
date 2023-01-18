import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Star: FC<SvgProps & IIconProps>;
export default Star;
export declare const StarBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const StarBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const StarBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const StarCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const StarLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const StarLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const StarTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
