import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Play: FC<SvgProps & IIconProps>;
export default Play;
export declare const PlayBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlayBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlayBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlayCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlayLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlayLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlayTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
