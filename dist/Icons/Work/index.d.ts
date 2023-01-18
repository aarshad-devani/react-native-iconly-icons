import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Work: FC<SvgProps & IIconProps>;
export default Work;
export declare const WorkBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WorkBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WorkBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WorkCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WorkLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WorkLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WorkTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
