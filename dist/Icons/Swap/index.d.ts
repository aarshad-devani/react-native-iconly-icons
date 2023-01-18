import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Swap: FC<SvgProps & IIconProps>;
export default Swap;
export declare const SwapBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SwapBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SwapBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SwapCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SwapLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SwapLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SwapTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
