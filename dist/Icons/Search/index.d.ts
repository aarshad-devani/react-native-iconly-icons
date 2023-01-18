import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Search: FC<SvgProps & IIconProps>;
export default Search;
export declare const SearchBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SearchBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SearchBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SearchCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SearchLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SearchLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const SearchTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
