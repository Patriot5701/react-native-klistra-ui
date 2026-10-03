import { useMemo } from "react";
import { useTheme } from "../config/ThemeContext";
import { createStyles } from "./styles";
import type { ThemeVariables } from "./variables";

export function useStyles(overrides?: Partial<ThemeVariables>) {
    const theme = useTheme(overrides);
    return useMemo(() => createStyles(theme), [theme]);
}
