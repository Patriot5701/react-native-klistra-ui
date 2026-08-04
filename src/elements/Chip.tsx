import { TouchableOpacity, Text } from "react-native";
import { useStyles } from "../styles/useStyles";
import { useTheme } from "../config/ThemeContext";

type Props = {
    isSelected: boolean
    text: string
    selectedBackground?: string
    selectedColor?: string
    secondary?: boolean
    tertiary?: boolean
    danger?: boolean
    warning?: boolean
    success?: boolean
    info?: boolean
    onPress: () => void
}

export const Chip = ({ isSelected, text, selectedBackground, selectedColor, secondary = false, tertiary = false, danger = false, warning = false, success = false, info = false, onPress }: Props) => {
    const styles = useStyles();
    const theme = useTheme();
    const selectedBackgroundColor = selectedBackground || secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary;
    const selectedTextColor = selectedColor || secondary ? theme.secondaryContrast : tertiary ? theme.tertiaryContrast : danger ? theme.dangerContrast : warning ? theme.warningContrast : success ? theme.successContrast : info ? theme.infoContrast : theme.primaryContrast;
    return (
        <TouchableOpacity style={[styles.chip, isSelected && { backgroundColor: selectedBackgroundColor, borderColor: selectedBackgroundColor }]} onPress={onPress}>
            <Text style={[styles.chipText, isSelected && { color: selectedTextColor }]}>{text}</Text>
        </TouchableOpacity>
    );
}