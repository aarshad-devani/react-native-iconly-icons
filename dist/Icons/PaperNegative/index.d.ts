import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const PaperNegative: FC<SvgProps & IIconProps>;
export default PaperNegative;
export declare const PaperNegativeBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperNegativeBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperNegativeBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperNegativeCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperNegativeLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperNegativeLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperNegativeTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
