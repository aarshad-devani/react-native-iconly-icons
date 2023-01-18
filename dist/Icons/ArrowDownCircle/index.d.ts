import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowDownCircle: FC<SvgProps & IIconProps>;
export default ArrowDownCircle;
export declare const ArrowDownCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCircleCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCircleLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCircleLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
