import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const TimeSquare: FC<SvgProps & IIconProps>;
export default TimeSquare;
export declare const TimeSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
