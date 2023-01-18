import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const EditSquare: FC<SvgProps & IIconProps>;
export default EditSquare;
export declare const EditSquareBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditSquareBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditSquareBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditSquareCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditSquareLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditSquareLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditSquareTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
