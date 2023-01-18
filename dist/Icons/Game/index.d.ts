import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Game: FC<SvgProps & IIconProps>;
export default Game;
export declare const GameBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GameBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GameBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GameCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GameLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GameLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const GameTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
