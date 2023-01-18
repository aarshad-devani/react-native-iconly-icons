import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowUpSquare: FC<SvgProps & IIconProps>;
export default ArrowUpSquare;
export declare const ArrowUpSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
