import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Home: FC<SvgProps & IIconProps>;
export default Home;
export declare const HomeBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HomeBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HomeBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HomeCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HomeLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HomeLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const HomeTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
