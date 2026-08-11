import type { ReactNode } from "react";
import { Text, type TextStyle, type StyleProp } from "react-native"
import { useStyles } from "../styles/useStyles";
import { useTheme } from "../config/ThemeContext";

type Props = {
    text?: string | number;
    color?: string;
    floating?: boolean;
    style?: StyleProp<TextStyle>;
    children?: ReactNode;
    secondary?: boolean;
    tertiary?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
}

const TRANSLUCENT_HEX_ALPHA = "1A";
const TRANSLUCENT_ALPHA = 0x1a / 255;

const translucidColor = (color: string): string => {
    const trimmed = color.trim();

    const hexMatch = /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.exec(trimmed);
    if (hexMatch) {
        let hex = hexMatch[1]!;
        if (hex.length === 3 || hex.length === 4) {
            hex = hex.split("").map((c) => c + c).join("");
        }
        return `#${hex.slice(0, 6)}${TRANSLUCENT_HEX_ALPHA}`;
    }

    const rgbMatch = /^rgba?\(\s*([\d.]+%?)\s*,\s*([\d.]+%?)\s*,\s*([\d.]+%?)(?:\s*,\s*[\d.]+%?)?\s*\)$/i.exec(trimmed);
    if (rgbMatch) {
        return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${TRANSLUCENT_ALPHA})`;
    }

    return trimmed;
};

export const Badge = ({ text, color, floating = false, style, children, secondary = false, tertiary = false, danger = false, warning = false, success = false, info = false }: Props) => {
    const styles = useStyles();
    const theme = useTheme();

    const backgroundColor = color ? translucidColor(color) : secondary ? translucidColor(theme.secondary) : tertiary ? translucidColor(theme.tertiary) : danger ? translucidColor(theme.danger) : warning ? translucidColor(theme.warning) : success ? translucidColor(theme.success) : info ? translucidColor(theme.info) : translucidColor(theme.primary);
    const textColor = color ?? (secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary);
    const containerStyle = [
        styles.badge,
        { backgroundColor: backgroundColor, color: textColor },
        floating && styles.absolute,
        style,
    ];

    if (children) {
        return (
            <Text style={[containerStyle, { flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                {children}
            </Text>
        );
    }

    return (
        <Text style={containerStyle}>
            {text}
        </Text>
    )
}
