import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Lock: FC<SvgProps & IIconProps>;
export default Lock;
export declare const LockBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LockBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LockBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LockCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LockLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LockLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LockTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
