import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const TimeCircle: FC<SvgProps & IIconProps>;
export default TimeCircle;
export declare const TimeCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeCircleCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeCircleLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeCircleLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TimeCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
