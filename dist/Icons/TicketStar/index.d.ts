import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const TicketStar: FC<SvgProps & IIconProps>;
export default TicketStar;
export declare const TicketStarBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketStarBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketStarBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketStarCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketStarLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketStarLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const TicketStarTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
