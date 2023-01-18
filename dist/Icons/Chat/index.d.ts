import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Chat: FC<SvgProps & IIconProps>;
export default Chat;
export declare const ChatBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChatBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChatBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChatCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChatLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChatLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ChatTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
