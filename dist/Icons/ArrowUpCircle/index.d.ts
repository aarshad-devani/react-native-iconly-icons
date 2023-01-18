import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowUpCircle: FC<SvgProps & IIconProps>;
export default ArrowUpCircle;
export declare const ArrowUpCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCircleCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCircleLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCircleLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
