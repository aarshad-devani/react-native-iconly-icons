import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Discovery: FC<SvgProps & IIconProps>;
export default Discovery;
export declare const DiscoveryBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscoveryBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscoveryBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscoveryCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscoveryLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscoveryLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscoveryTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
