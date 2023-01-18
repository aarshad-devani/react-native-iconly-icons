import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Danger: FC<SvgProps & IIconProps>;
export default Danger;
export declare const DangerBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DangerBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DangerBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DangerTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
