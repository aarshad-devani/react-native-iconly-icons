import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const VolumeDown: FC<SvgProps & IIconProps>;
export default VolumeDown;
export declare const VolumeDownBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeDownBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeDownBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeDownCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeDownLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeDownLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeDownTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
