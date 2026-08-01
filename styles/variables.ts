export type ThemeMode = "light" | "dark";

export type ThemeVariables = {
    //Couleurs
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    success: string;
    info: string;

    //Couleurs contrastées
    primaryContrast: string;
    secondaryContrast: string;
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
    primary: "#007AFF",
    secondary: "#007AFF",
    danger: "#FF3B30",
    warning: "#e6ac28",
    success: "#4CD964",
    info: "#5AC8FA",
    primaryContrast: "#FFFFFF",
    secondaryContrast: "#FFFFFF",
    dangerContrast: "#FFFFFF",
    warningContrast: "#FFFFFF",
    successContrast: "#FFFFFF",
    infoContrast: "#FFFFFF",
    "bg-body": "#F6F6F6",
    "bg-secondary": "#E5E5E5",
    "text-body": "#1e1e1e",
    "text-secondary": "#777777",
    "text-disabled": "#a0aab4",
    "border-color": "#DDDDDDFF",
    "bg-card": "#FCFCFC",
    ...shared,
};

export const darkTheme: ThemeVariables = {
    primary: "#007AFF",
    secondary: "#007AFF",
    danger: "#FF3B30",
    warning: "#e6ac28",
    success: "#4CD964",
    info: "#5AC8FA",
    primaryContrast: "#FFFFFF",
    secondaryContrast: "#FFFFFF",
    dangerContrast: "#FFFFFF",
    warningContrast: "#FFFFFF",
    successContrast: "#FFFFFF",
    infoContrast: "#FFFFFF",
    "bg-body": "#121212",
    "bg-secondary": "#1E1E1E",
    "text-body": "#F5F5F5",
    "text-secondary": "#A0A0A0",
    "text-disabled": "#6B6B6B",
    "border-color": "#333333",
    "bg-card": "#1A1A1A",
    ...shared,
};
