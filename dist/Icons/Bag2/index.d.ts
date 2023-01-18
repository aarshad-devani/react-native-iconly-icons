import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Bag2: FC<SvgProps & IIconProps>;
export default Bag2;
export declare const Bag2Bold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Bag2Curved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const Bag2Twotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
