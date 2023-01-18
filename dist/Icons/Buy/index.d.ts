import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Buy: FC<SvgProps & IIconProps>;
export default Buy;
export declare const BuyBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BuyBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BuyBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BuyCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BuyLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BuyLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BuyTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
