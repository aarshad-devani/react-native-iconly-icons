import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Bag: FC<SvgProps & IIconProps>;
export default Bag;
export declare const BagBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BagBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BagBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BagCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BagLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BagLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BagTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
