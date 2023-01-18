import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Document: FC<SvgProps & IIconProps>;
export default Document;
export declare const DocumentBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DocumentBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DocumentBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DocumentCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DocumentLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DocumentLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DocumentTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
