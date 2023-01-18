import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowRightCircle: FC<SvgProps & IIconProps>;
export default ArrowRightCircle;
export declare const ArrowRightCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCircleCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCircleLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCircleLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
