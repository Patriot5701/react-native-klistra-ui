import { View, useWindowDimensions } from "react-native";
import { useTheme } from "../config/ThemeContext";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

type Props = {
    color?: string,
    background?: string,
    step: number,
    nbSteps: number,
    width?: number
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
    warning?: boolean,
    success?: boolean,
    info?: boolean,
}

export const Progress = ({ color, background, step, nbSteps, width, secondary = false, tertiary = false, danger = false, warning = false, success = false, info = false }: Props) => {
    const theme = useTheme();
    const windowWidth = useWindowDimensions().width;
    const progressWidth = width ?? (windowWidth - theme.padding - 2);
    const safeNbSteps = Math.max(0, nbSteps);
    const normalizedStep = Math.max(0, Math.min(step, safeNbSteps));
    const backgroundColor = background ?? (secondary ? theme.secondaryContrast : tertiary ? theme.tertiaryContrast : danger ? theme.dangerContrast : warning ? theme.warningContrast : success ? theme.successContrast : info ? theme.infoContrast : theme.primaryContrast);
    const progressColor = color ?? (secondary ? theme.secondary : tertiary ? theme.tertiary : danger ? theme.danger : warning ? theme.warning : success ? theme.success : info ? theme.info : theme.primary);

    const style = useAnimatedStyle(() => {
        const ratio = safeNbSteps === 0 ? 0 : normalizedStep / safeNbSteps;
        const w = withTiming(ratio * progressWidth, { duration: 500 });
        return { width: w };
    }, [normalizedStep, progressWidth, safeNbSteps]);

    return (
        <View style={{ backgroundColor: backgroundColor, borderRadius: 5 }}>
            <Animated.View
                style={[
                    { height: 10, backgroundColor: progressColor, borderRadius: 5 },
                    style,
                ]}
            />
        </View>
    )
}
