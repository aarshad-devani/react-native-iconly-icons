import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Voice: FC<SvgProps & IIconProps>;
export default Voice;
export declare const VoiceBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VoiceBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VoiceBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VoiceCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VoiceLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VoiceLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VoiceTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
