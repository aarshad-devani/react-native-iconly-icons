import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Unlock: FC<SvgProps & IIconProps>;
export default Unlock;
export declare const UnlockBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UnlockBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UnlockBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UnlockCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UnlockLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UnlockLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UnlockTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
