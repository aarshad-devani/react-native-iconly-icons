import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Hide: FC<SvgProps & IIconProps>;
export default Hide;
export declare const HideBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HideBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HideBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HideCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HideLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HideLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HideTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
