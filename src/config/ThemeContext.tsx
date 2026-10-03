import { createContext, useContext, useMemo, type ReactNode } from "react";
import { lightTheme, darkTheme, type ThemeMode, type ThemeVariables} from "../styles/variables";

type ThemeContextValue = {
    mode: ThemeMode;
    theme: ThemeVariables;
};

const ThemeContext = createContext<ThemeContextValue>({
    mode: "light",
    theme: lightTheme,
});

type ThemeProviderProps = {
    mode?: ThemeMode;
    theme?: Partial<ThemeVariables>;
    children: ReactNode;
};

function ThemeProvider({ mode = "light", theme: overrides, children }: ThemeProviderProps) {
    const value = useMemo<ThemeContextValue>(() => {
        const base = mode === "dark" ? darkTheme : lightTheme;
        return {
            mode,
            theme: { ...base, ...overrides },
        };
    }, [mode, overrides]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

function useTheme(overrides?: Partial<ThemeVariables>): ThemeVariables {
    const theme = useContext(ThemeContext).theme;
    return useMemo(
        () => (overrides ? { ...theme, ...overrides } : theme),
        [theme, overrides],
    );
}

function useThemeMode(): ThemeMode {
    return useContext(ThemeContext).mode;
}

export {
    ThemeProvider,
    useTheme,
    useThemeMode,
};
