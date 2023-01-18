import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Chart: FC<SvgProps & IIconProps>;
export default Chart;
export declare const ChartBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChartBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChartBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChartCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChartLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChartLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChartTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
