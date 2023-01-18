import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const CallMissed: FC<SvgProps & IIconProps>;
export default CallMissed;
export declare const CallMissedBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallMissedBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallMissedBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallMissedCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallMissedLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallMissedLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallMissedTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
