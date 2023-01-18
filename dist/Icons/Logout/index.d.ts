import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Logout: FC<SvgProps & IIconProps>;
export default Logout;
export declare const LogoutBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LogoutBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LogoutBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LogoutCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LogoutLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LogoutLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LogoutTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
