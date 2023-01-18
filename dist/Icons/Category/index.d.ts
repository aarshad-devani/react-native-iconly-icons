import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Category: FC<SvgProps & IIconProps>;
export default Category;
export declare const CategoryBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CategoryBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CategoryBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CategoryCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CategoryLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CategoryLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CategoryTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
