import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Calendar: FC<SvgProps & IIconProps>;
export default Calendar;
export declare const CalendarBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CalendarBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CalendarBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CalendarCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CalendarLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CalendarLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const CalendarTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
