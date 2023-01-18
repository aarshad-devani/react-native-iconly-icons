import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ShieldFail: FC<SvgProps & IIconProps>;
export default ShieldFail;
export declare const ShieldFailBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldFailBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldFailBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldFailCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldFailLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldFailLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldFailTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
