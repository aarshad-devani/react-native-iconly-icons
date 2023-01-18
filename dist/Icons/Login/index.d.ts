import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Login: FC<SvgProps & IIconProps>;
export default Login;
export declare const LoginBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LoginBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LoginBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LoginCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LoginLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LoginLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LoginTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
