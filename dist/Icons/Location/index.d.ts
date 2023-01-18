import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Location: FC<SvgProps & IIconProps>;
export default Location;
export declare const LocationBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LocationBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LocationBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LocationCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LocationLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LocationLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const LocationTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
