import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Plus: FC<SvgProps & IIconProps>;
export default Plus;
export declare const PlusBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlusBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlusBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlusCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlusLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlusLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const PlusTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
