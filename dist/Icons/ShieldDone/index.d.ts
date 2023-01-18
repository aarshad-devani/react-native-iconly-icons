import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const ShieldDone: FC<SvgProps & IIconProps>;
export default ShieldDone;
export declare const ShieldDoneBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldDoneBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldDoneBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldDoneCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldDoneLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldDoneLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ShieldDoneTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
