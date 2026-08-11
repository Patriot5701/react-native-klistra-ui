import { useTheme } from "../config/ThemeContext";
import { useStyles } from "../styles/useStyles";
import { TextInput, type TextInputSelectionChangeEvent } from "react-native";

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onSubmitEditing?: () => void;
    onEndEditing?: () => void;
    onSelectionChange?: (event: TextInputSelectionChangeEvent) => void;
}

export const Input = ({ placeholder, value, onChangeText, onBlur, onFocus, onSubmitEditing, onEndEditing, onSelectionChange }: Props) => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={theme["text-disabled"]}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            onFocus={onFocus}
            onSubmitEditing={onSubmitEditing}
            onEndEditing={onEndEditing}
            onSelectionChange={onSelectionChange}
        />
    )
}