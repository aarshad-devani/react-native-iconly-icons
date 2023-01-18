import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Password: FC<SvgProps & IIconProps>;
export default Password;
export declare const PasswordBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PasswordBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PasswordBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PasswordCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PasswordLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PasswordLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PasswordTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
