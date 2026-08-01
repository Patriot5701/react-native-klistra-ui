import { SafeAreaView, useWindowDimensions } from "react-native";
import { useTheme } from "../config/ThemeContext";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

type Props = {
    color?: string,
    backgroundColor?: string,
    step: number,
    nbSteps: number,
    width?: number
}

export const Progress = ({ color, backgroundColor, step, nbSteps, width }: Props) => {
    const theme = useTheme();
    const progressWidth = width ?? (useWindowDimensions().width - theme.padding - 2);
    const normalizedStep = Math.max(0, Math.min(step, nbSteps));

    const style = useAnimatedStyle(() => {
        const w = withTiming((normalizedStep * progressWidth) / nbSteps, { duration: 500 });
        return { width: w };
    }, [normalizedStep, progressWidth, nbSteps]);

    return (
        <SafeAreaView style={{backgroundColor: backgroundColor, borderRadius: '5px'}}>
            <Animated.View style={[{height: 10, backgroundColor: color, borderRadius: '5px'}, style]} />
        </SafeAreaView>
    )
}
