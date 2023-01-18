import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Bookmark: FC<SvgProps & IIconProps>;
export default Bookmark;
export declare const BookmarkBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BookmarkBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BookmarkBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BookmarkCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BookmarkLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BookmarkLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const BookmarkTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
