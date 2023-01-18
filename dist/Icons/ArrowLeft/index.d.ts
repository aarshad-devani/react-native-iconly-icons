import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowLeft: FC<SvgProps & IIconProps>;
export default ArrowLeft;
export declare const ArrowLeftBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
