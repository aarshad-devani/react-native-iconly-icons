import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowLeftSquare: FC<SvgProps & IIconProps>;
export default ArrowLeftSquare;
export declare const ArrowLeftSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
