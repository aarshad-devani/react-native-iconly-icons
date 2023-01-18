import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Setting: FC<SvgProps & IIconProps>;
export default Setting;
export declare const SettingBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SettingBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SettingBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SettingCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SettingLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SettingLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SettingTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
