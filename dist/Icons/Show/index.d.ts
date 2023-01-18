import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Show: FC<SvgProps & IIconProps>;
export default Show;
export declare const ShowBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShowBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShowBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShowCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShowLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShowLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShowTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
