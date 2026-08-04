import { useMemo } from "react";
import { useTheme } from "../config/ThemeContext";
import { createStyles } from "./styles";

export function useStyles() {
    const theme = useTheme();
    return useMemo(() => createStyles(theme), [theme]);
}
