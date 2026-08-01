import { View } from "react-native"
import { useStyles } from "../styles/useStyles"
import { Icon } from "./Icon"
import { useTheme } from "../config/ThemeContext";

type Props = {
    name: string,
    size: number,
    color: string,
    background: string,
    borderColor?: string,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
    warning?: boolean,
    success?: boolean,
    info?: boolean,
}

export const IconBadge = ({ name, size, color, background, borderColor, primary = true, secondary = false, tertiary = false, danger = false, warning = false, success = false, info = false }: Props) => {
    const theme = useTheme();
    const backgroundColor = background || primary ? theme.primary : secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary;
    const textColor = color || primary ? theme.primary : secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary;
    const styles = useStyles();
    return (
        <View style={[styles.icon, borderColor && { borderColor: borderColor, borderWidth: 1, padding: 4}, backgroundColor && { backgroundColor: backgroundColor }]}>
            <Icon name={name} size={size} color={textColor} />
        </View>
    )
}
