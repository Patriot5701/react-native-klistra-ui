import { ActivityIndicator, Text, TouchableOpacity, type GestureResponderEvent } from "react-native"
import { useState } from "react";
import { useTheme } from "../config/ThemeContext";
import { useStyles } from "../styles/useStyles";
import { Icon } from "./Icon";

type Props = {
    small?: boolean,
    color: string, 
    background: string, 
    text?: string, 
    onPress: ((event: GestureResponderEvent) => void | Promise<void>), 
    disabled? : boolean,
    icon?: string,
}

export const Btn = ({ small = false, color, background, text, onPress, disabled = false, icon }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const styles = useStyles();
    const theme = useTheme();

    const onBtnPressed = async (event: GestureResponderEvent) => {
        if (disabled || isLoading) {
            return;
        }

        setIsLoading(true);
        try {
            // Laisse React Native rendre l'état loading avant une action potentiellement bloquante.
            await new Promise(resolve => setTimeout(resolve as () => void, 0));
            await Promise.resolve(onPress(event));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <TouchableOpacity onPress={onBtnPressed} disabled={disabled || isLoading} 
            style={[
                styles.button, 
                //Petit
                small && styles.buttonSmall,
                { backgroundColor: background},
                {flexDirection: 'row', alignItems: 'center', gap: theme.gap / 2},
            ]}>
            
            {isLoading && <ActivityIndicator size="small" color={color} />}
            {!isLoading && (
                <>         
                   {icon && <Icon name={icon} size={small ? 12 : 16} color={color} />}
                   {text && (
                        <Text 
                            style={[
                                //Normal
                                styles.buttonText, 
                                //Petit
                                small && styles.buttonSmallText, 
                                { color: color },
                            ]}
                        >
                            {text}
                        </Text>
                    )}
                </>

            )}

        </TouchableOpacity>
    )
}
