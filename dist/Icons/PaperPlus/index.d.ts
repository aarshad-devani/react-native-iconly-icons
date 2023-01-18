import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const PaperPlus: FC<SvgProps & IIconProps>;
export default PaperPlus;
export declare const PaperPlusBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperPlusBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperPlusBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperPlusCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperPlusLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperPlusLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperPlusTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
