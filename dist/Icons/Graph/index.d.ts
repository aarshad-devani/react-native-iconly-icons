import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Graph: FC<SvgProps & IIconProps>;
export default Graph;
export declare const GraphBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GraphBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GraphBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GraphCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GraphLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GraphLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GraphTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
