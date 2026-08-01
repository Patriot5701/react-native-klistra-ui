import { ReactNode } from "react";
import { Text, View } from "react-native"
import { useStyles } from "../styles/useStyles";

type Props = {
    text?: string | number;
    color?: string;
    floating?: boolean;
    style?: Object;
    children?: ReactNode;
}

export const Badge = ({ text, color, floating = false, style, children }: Props) => {
    const styles = useStyles();
    const containerStyle = [
        styles.badge,
        { backgroundColor: color + '1A', color: color },
        floating && styles.absolute,
        style,
    ];

    if (children) {
        return (
            <View style={[containerStyle, { flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                {children}
            </View>
        );
    }

    return (
        <Text style={containerStyle}>
            {text}
        </Text>
    )
}
