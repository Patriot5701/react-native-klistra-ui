import { useTheme } from "@/config/ThemeContext";
import { useStyles } from "@/styles/useStyles";
import { TextInput } from "react-native";

export const Input = () => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <TextInput
            style={styles.input}
            placeholder="Placeholder"
            placeholderTextColor={theme["text-disabled"]}
        />
    )
}