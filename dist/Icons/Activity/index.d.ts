import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Activity: FC<SvgProps & IIconProps>;
export default Activity;
export declare const ActivityBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ActivityBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ActivityBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ActivityCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ActivityLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ActivityLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ActivityTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
