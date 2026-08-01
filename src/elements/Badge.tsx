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
    const backgroundColor = color+'1A' || primary ? theme.primary+'1A' : secondary ? theme.secondary+'1A' : tertiary ? theme.tertiary+'1A' : danger ? theme.danger+'1A' : warning ? theme.warning+'1A' : success ? theme.success+'1A' : info ? theme.info+'1A' : theme.primary+'1A';
    const textColor = color || primary ? theme.primary : secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary;
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
