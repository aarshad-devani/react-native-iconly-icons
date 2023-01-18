import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ArrowRight: FC<SvgProps & IIconProps>;
export default ArrowRight;
export declare const ArrowRightBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ArrowRightTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
