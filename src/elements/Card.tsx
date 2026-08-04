import type { ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { useStyles } from "../styles/useStyles";

type Props = {
    children?: ReactNode;
    direction?: "row" | "column";
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ children, direction = "column", style }: Props) => {
    const styles = useStyles();

    return (
        <View style={[styles.card, { flexDirection: direction }, style]}>
            {children}
        </View>
    );
}