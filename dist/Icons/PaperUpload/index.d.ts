import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const PaperUpload: FC<SvgProps & IIconProps>;
export default PaperUpload;
export declare const PaperUploadBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperUploadBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperUploadBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperUploadCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperUploadLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperUploadLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperUploadTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
