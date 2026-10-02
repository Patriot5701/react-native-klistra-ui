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
    "bg-card": string;
    "bg-form": string;

    //Borders colors
    "border-color": string;
    "border-color-warning": string;
    "border-color-danger": string;
    "border-color-success": string;
    "border-color-info": string;
    "border-color-primary": string;
    "border-color-secondary": string;

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
    "bg-card": "#FCFCFC",
    "bg-form": "#FFFFFF",
    "border-color": "#DDDDDDFF",
    "border-color-warning": "#eeba1e",
    "border-color-danger": "#D9314A",
    "border-color-success": "#66cf96",
    "border-color-info": "#5bb7f8",
    "border-color-primary": "#004999",
    "border-color-secondary": "#d84496",
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
    "bg-card": "#1A1A1A",
    "bg-form": "#000000",
    "border-color": "#333333",
    "border-color-warning": "#eeba1e",
    "border-color-danger": "#D9314A",
    "border-color-success": "#66cf96",
    "border-color-info": "#5bb7f8",
    "border-color-primary": "#004999",
    "border-color-secondary": "#d84496",
    ...shared,
};
