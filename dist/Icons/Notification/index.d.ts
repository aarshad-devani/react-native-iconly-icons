import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Notification: FC<SvgProps & IIconProps>;
export default Notification;
export declare const NotificationBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const NotificationBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const NotificationBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const NotificationCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const NotificationLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const NotificationLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const NotificationTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
