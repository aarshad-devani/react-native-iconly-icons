import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Filter2: FC<SvgProps & IIconProps>;
export default Filter2;
export declare const Filter2Bold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Filter2Bulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Filter2Curved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
