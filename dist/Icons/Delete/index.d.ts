import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Delete: FC<SvgProps & IIconProps>;
export default Delete;
export declare const DeleteBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DeleteBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DeleteBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DeleteCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DeleteLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DeleteLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DeleteTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
