import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowDown: FC<SvgProps & IIconProps>;
export default ArrowDown;
export declare const ArrowDownBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowDownTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
