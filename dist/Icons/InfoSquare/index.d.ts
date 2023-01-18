import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const InfoSquare: FC<SvgProps & IIconProps>;
export default InfoSquare;
export declare const InfoSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
