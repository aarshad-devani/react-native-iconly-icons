import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Heart: FC<SvgProps & IIconProps>;
export default Heart;
export declare const HeartBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HeartBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HeartBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HeartCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HeartLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HeartLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HeartTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
