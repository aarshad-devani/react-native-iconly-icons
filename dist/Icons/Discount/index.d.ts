import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Discount: FC<SvgProps & IIconProps>;
export default Discount;
export declare const DiscountBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscountBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscountBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscountCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscountLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscountLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const DiscountTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
