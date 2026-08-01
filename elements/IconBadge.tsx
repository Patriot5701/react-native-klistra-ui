import { View } from "react-native"
import { useStyles } from "../styles/useStyles"
import { Icon } from "./Icon"

type Props = {
    name: string,
    size: number,
    color: string,
    backgroundColor: string,
    borderColor?: string
}

export const IconBadge = ({ name, size, color, backgroundColor, borderColor }: Props) => {
    const styles = useStyles();
    return (
        <View style={[styles.icon, borderColor && { borderColor: borderColor, borderWidth: 1, padding: 4}, backgroundColor && { backgroundColor: backgroundColor }]}>
            <Icon name={name} size={size} color={color} />
        </View>
    )
}
