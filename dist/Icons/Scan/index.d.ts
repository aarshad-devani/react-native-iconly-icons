import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Scan: FC<SvgProps & IIconProps>;
export default Scan;
export declare const ScanBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ScanBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ScanBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ScanCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ScanLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ScanLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ScanTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
