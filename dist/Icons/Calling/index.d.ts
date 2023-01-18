import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Calling: FC<SvgProps & IIconProps>;
export default Calling;
export declare const CallingBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallingBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallingBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallingCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallingLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallingLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CallingTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
