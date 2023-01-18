import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Call: FC<SvgProps & IIconProps>;
export default Call;
export declare const CallBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
