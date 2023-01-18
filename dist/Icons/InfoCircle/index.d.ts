import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const InfoCircle: FC<SvgProps & IIconProps>;
export default InfoCircle;
export declare const InfoCircleBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoCircleBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoCircleBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const InfoCircleTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
