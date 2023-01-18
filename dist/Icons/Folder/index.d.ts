import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Folder: FC<SvgProps & IIconProps>;
export default Folder;
export declare const FolderBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FolderBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FolderBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FolderCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FolderLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FolderLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FolderTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
