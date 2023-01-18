import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const VolumeOff: FC<SvgProps & IIconProps>;
export default VolumeOff;
export declare const VolumeOffBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeOffBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeOffBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeOffCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeOffLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeOffLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeOffTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
