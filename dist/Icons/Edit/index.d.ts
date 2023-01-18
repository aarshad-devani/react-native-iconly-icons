import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Edit: FC<SvgProps & IIconProps>;
export default Edit;
export declare const EditBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const EditTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
