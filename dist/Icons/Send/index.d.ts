import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Send: FC<SvgProps & IIconProps>;
export default Send;
export declare const SendBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SendBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SendBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SendCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SendLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SendLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SendTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
