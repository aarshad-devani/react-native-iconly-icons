import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Image: FC<SvgProps & IIconProps>;
export default Image;
export declare const ImageBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ImageBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ImageBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ImageCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ImageLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ImageLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ImageTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
