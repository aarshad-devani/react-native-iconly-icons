import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Filter: FC<SvgProps & IIconProps>;
export default Filter;
export declare const FilterBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FilterBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FilterBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FilterCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FilterLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FilterLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const FilterTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
