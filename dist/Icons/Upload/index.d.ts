import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Upload: FC<SvgProps & IIconProps>;
export default Upload;
export declare const UploadBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UploadBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UploadBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UploadCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UploadLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UploadLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const UploadTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
