import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Wallet: FC<SvgProps & IIconProps>;
export default Wallet;
export declare const WalletBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WalletBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WalletBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WalletCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WalletLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WalletLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const WalletTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
