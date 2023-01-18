import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowRightSquare: FC<SvgProps & IIconProps>;
export default ArrowRightSquare;
export declare const ArrowRightSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
