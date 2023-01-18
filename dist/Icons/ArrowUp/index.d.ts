import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowUp: FC<SvgProps & IIconProps>;
export default ArrowUp;
export declare const ArrowUpBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowUpTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
