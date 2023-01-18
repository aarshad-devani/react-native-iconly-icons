import { FC } from "react";
import { SvgProps } from "react-native-svg";
interface IIconProps {
    variant: "Bold" | "Broken" | "Bulk" | "Curved" | "Light" | "LightOutline" | "Twotone";
    fillColor?: string;
}
declare const Profile: FC<SvgProps & IIconProps>;
export default Profile;
export declare const ProfileBold: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ProfileBroken: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ProfileBulk: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ProfileCurved: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ProfileLight: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ProfileLightOutline: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
export declare const ProfileTwotone: (props: SvgProps & {
    fillColor: string;
}) => JSX.Element;
