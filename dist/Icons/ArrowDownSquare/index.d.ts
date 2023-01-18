import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowDownSquare: FC<SvgProps & IIconProps>;
export default ArrowDownSquare;
export declare const ArrowDownSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
