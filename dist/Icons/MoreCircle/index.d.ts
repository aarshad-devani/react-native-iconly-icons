import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const MoreCircle: FC<SvgProps & IIconProps>;
export default MoreCircle;
export declare const MoreCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreCircleCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreCircleLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreCircleLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MoreCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
