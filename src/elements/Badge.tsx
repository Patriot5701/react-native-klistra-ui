import type { ReactNode } from "react";
import { Text, View } from "react-native"
import { useStyles } from "../styles/useStyles";
import { useTheme } from "../config/ThemeContext";

type Props = {
    text?: string | number;
    color?: string;
    floating?: boolean;
    style?: Object;
    children?: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
}

export const Badge = ({ text, color, floating = false, style, children, primary = true, secondary = false, tertiary = false, danger = false, warning = false, success = false, info = false }: Props) => {
    const styles = useStyles();
    const theme = useTheme();

    const translucidColor = (color: string) => {
        return color+'1A';
    }
    const backgroundColor = (color ? translucidColor(color) : secondary ? translucidColor(theme.secondary) : tertiary ? translucidColor(theme.tertiary) : danger ? translucidColor(theme.danger) : warning ? translucidColor(theme.warning) : success ? translucidColor(theme.success) : info ? translucidColor(theme.info) : translucidColor(theme.primary));
    const textColor = color || secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary;
    const containerStyle = [
        styles.badge,
        { backgroundColor: backgroundColor, color: textColor },
        floating && styles.absolute,
        style,
    ];

    if (children) {
        return (
            <View style={[containerStyle, { flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                {children}
            </View>
        );
    }

    return (
        <Text style={containerStyle}>
            {text}
        </Text>
    )
}
