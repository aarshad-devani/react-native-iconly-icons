import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const TickSquare: FC<SvgProps & IIconProps>;
export default TickSquare;
export declare const TickSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TickSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TickSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TickSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TickSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TickSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TickSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
