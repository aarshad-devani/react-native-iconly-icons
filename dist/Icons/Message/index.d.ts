import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Message: FC<SvgProps & IIconProps>;
export default Message;
export declare const MessageBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MessageBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MessageBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MessageCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MessageLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MessageLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const MessageTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
