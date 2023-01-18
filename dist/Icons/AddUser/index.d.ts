import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const AddUser: FC<SvgProps & IIconProps>;
export default AddUser;
export declare const AddUserBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const AddUserBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const AddUserBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const AddUserCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const AddUserLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const AddUserLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const AddUserTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
