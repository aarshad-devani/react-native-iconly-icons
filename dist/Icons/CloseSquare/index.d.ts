import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const CloseSquare: FC<SvgProps & IIconProps>;
export default CloseSquare;
export declare const CloseSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CloseSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CloseSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CloseSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CloseSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CloseSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CloseSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
