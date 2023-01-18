import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const VolumeUp: FC<SvgProps & IIconProps>;
export default VolumeUp;
export declare const VolumeUpBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeUpBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeUpBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeUpCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeUpLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeUpLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VolumeUpTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
