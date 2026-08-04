import { useTheme } from "../config/ThemeContext";
import { useStyles } from "../styles/useStyles";
import { TextInput } from "react-native";

type Props = {
    placeholder?: string;
}

export const Input = ({ placeholder }: Props) => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={theme["text-disabled"]}
        />
    )
}