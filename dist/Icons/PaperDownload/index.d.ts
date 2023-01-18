import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const PaperDownload: FC<SvgProps & IIconProps>;
export default PaperDownload;
export declare const PaperDownloadBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperDownloadBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperDownloadBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperDownloadCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperDownloadLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperDownloadLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PaperDownloadTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
