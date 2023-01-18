import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Video: FC<SvgProps & IIconProps>;
export default Video;
export declare const VideoBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VideoBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VideoBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VideoCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VideoLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VideoLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const VideoTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
