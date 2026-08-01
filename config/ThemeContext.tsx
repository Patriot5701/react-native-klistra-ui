import { createContext, useContext, useMemo, ReactNode } from "react";
import {
	ThemeMode,
	ThemeVariables,
	lightTheme,
	darkTheme,
} from "../styles/variables";

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

export function ThemeProvider({ mode = "light", theme: overrides, children }: ThemeProviderProps) {
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

export function useTheme(): ThemeVariables {
	return useContext(ThemeContext).theme;
}

export function useThemeMode(): ThemeMode {
	return useContext(ThemeContext).mode;
}
