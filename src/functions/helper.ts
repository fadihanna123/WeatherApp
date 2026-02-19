import { Linking } from "react-native";

export const handleLink = (link: string) => Linking.openURL(link);
