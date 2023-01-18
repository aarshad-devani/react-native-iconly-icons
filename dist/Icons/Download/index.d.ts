import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Download: FC<SvgProps & IIconProps>;
export default Download;
export declare const DownloadBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DownloadBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DownloadBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DownloadCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DownloadLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DownloadLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DownloadTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
