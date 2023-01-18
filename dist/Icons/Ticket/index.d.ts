import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Ticket: FC<SvgProps & IIconProps>;
export default Ticket;
export declare const TicketBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
