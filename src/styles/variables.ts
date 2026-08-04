export type ThemeMode = "light" | "dark";

export type ThemeVariables = {
    //Couleurs
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    success: string;
    info: string;
    tertiary: string;

    //Couleurs contrastées
    primaryContrast: string;
    secondaryContrast: string;
    tertiaryContrast: string;
    dangerContrast: string;
    warningContrast: string;
    successContrast: string;
    infoContrast: string;

    //Colors
    "bg-body": string;
    "bg-secondary": string;
    "text-body": string;
    "text-secondary": string;
    "text-disabled": string;
    "border-color": string;
    "bg-card": string;
    "bg-form": string;

    //Sizes
    gap: number;
    padding: number;
    "border-radius": number;
    "component-border-radius": number;
};

const shared = {
    gap: 16,
    "border-radius": 16,
    "component-border-radius": 8,
    padding: 16,
} as const;

export const lightTheme: ThemeVariables = {
    primary: "#004999",
    secondary: "#d84496",
    tertiary: "#63cfbc",
    danger: "#D9314A",
    warning: "#eeba1e",
    success: "#66cf96",
    info: "#5bb7f8",
    primaryContrast: "#FFFFFF",
    secondaryContrast: "#000000",
    tertiaryContrast: "#000000",
    dangerContrast: "#FFFFFF",
    warningContrast: "#000000",
    successContrast: "#000000",
    infoContrast: "#000000",
    "bg-body": "#F6F6F6",
    "bg-secondary": "#E5E5E5",
    "text-body": "#1e1e1e",
    "text-secondary": "#777777",
    "text-disabled": "#a0aab4",
    "border-color": "#DDDDDDFF",
    "bg-card": "#FCFCFC",
    "bg-form": "#FFFFFF",
    ...shared,
};

export const darkTheme: ThemeVariables = {
    primary: "#004999",
    secondary: "#d84496",
    tertiary: "#63cfbc",
    danger: "#D9314A",
    warning: "#eeba1e",
    success: "#66cf96",
    info: "#5bb7f8",
    primaryContrast: "#FFFFFF",
    secondaryContrast: "#000000",
    tertiaryContrast: "#000000",
    dangerContrast: "#FFFFFF",
    warningContrast: "#000000",
    successContrast: "#000000",
    infoContrast: "#000000",
    "bg-body": "#121212",
    "bg-secondary": "#1E1E1E",
    "text-body": "#F5F5F5",
    "text-secondary": "#A0A0A0",
    "text-disabled": "#6B6B6B",
    "border-color": "#333333",
    "bg-card": "#1A1A1A",
    "bg-form": "#000000",
    ...shared,
};
