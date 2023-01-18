import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const MoreSquare: FC<SvgProps & IIconProps>;
export default MoreSquare;
export declare const MoreSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
