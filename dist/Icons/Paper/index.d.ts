import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Paper: FC<SvgProps & IIconProps>;
export default Paper;
export declare const PaperBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
