import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowLeftCircle: FC<SvgProps & IIconProps>;
export default ArrowLeftCircle;
export declare const ArrowLeftCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCircleCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCircleLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCircleLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowLeftCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
