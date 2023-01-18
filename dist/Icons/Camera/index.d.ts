import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Camera: FC<SvgProps & IIconProps>;
export default Camera;
export declare const CameraBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CameraBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CameraBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CameraCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CameraLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CameraLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CameraTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
