import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const CallSilent: FC<SvgProps & IIconProps>;
export default CallSilent;
export declare const CallSilentBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallSilentBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallSilentBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallSilentCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallSilentLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallSilentLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallSilentTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
