import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const PaperFail: FC<SvgProps & IIconProps>;
export default PaperFail;
export declare const PaperFailBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperFailBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperFailBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperFailCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperFailLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperFailLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperFailTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
