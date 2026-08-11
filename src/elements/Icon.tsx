import { useTheme } from "../config/ThemeContext";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import type { StyleProp, TextStyle } from "react-native";

export type IconName =
    | "add"
    | "alert"
    | "brand"
    | "calendar"
    | "car"
    | "close"
    | "driver"
    | "exit"
    | "left"
    | "menu"
    | "minus"
    | "money"
    | "pin"
    | "rankings"
    | "return"
    | "right"
    | "stats"
    | "building"
    | "front-wing"
    | "rear-wing"
    | "suspension"
    | "flanks"
    | "flat-bottom"
    | "disc"
    | "arrow-up"
    | "arrow-down"
    | "question-circle"
    | "caret-down-sharp"
    | "settings"
    | "wrench"
    | "dashboard"
    | "wind"
    | "chassis";

type Props = {
    name: IconName,
    size: number,
    color?: string,
    style?: StyleProp<TextStyle>,
}

export const Icon = ({ name, size, color, style }: Props) => {
    const theme = useTheme();
    const iconColor = color ?? theme['text-body'];
    switch (name) {
        case "add":
            return <FontAwesome name="plus" size={size} color={iconColor} style={style} />
        case "alert":
            return <Ionicons name="megaphone" size={size} color={iconColor} style={style} />
        case "brand":
            return <AntDesign name="trademark" size={size} color={iconColor} style={style} />
        case "calendar":
            return <Ionicons name="calendar-clear-outline" size={size} color={iconColor} style={style} />
        case "car":
            return <Ionicons name="car-sport" size={size} color={iconColor} style={style} />
        case "close":
            return <AntDesign name="close" size={size} color={iconColor} style={style} />
        case "driver":
            return <MaterialIcons name="sports-motorsports" size={size} color={iconColor} style={style} />
        case "exit":
            return <Ionicons name="exit" size={size} color={iconColor} style={style} />
        case "left":
            return <AntDesign name="caret-left" size={size} color={iconColor} style={style} />
        case "menu":
            return <Ionicons name="apps-sharp" size={size} color={iconColor} style={style} />
        case "minus":
            return <Entypo name="minus" size={size} color={iconColor} style={style} />
        case "money":
            return <Ionicons name="logo-euro" size={size} color={iconColor} style={style} />
        case "pin":
            return <Entypo name="location-pin" size={size} color={iconColor} style={style} />
        case "rankings":
            return <Ionicons name="podium" size={size} color={iconColor} style={style} />
        case "return":
            return <Ionicons name="arrow-back" size={size} color={iconColor} style={style} />
        case "right":
            return <AntDesign name="caret-right" size={size} color={iconColor} style={style} />
        case "stats":
            return <AntDesign name="radar-chart" size={size} color={iconColor} style={style} />
        case "building":
            return <FontAwesome5 name="building" size={size} color={iconColor} style={style} />
        case "front-wing":
            return <AntDesign name="swap-right" size={size} color={iconColor} style={style} />
        case "rear-wing":
            return <AntDesign name="swap-left" size={size} color={iconColor} style={style} />
        case "suspension":
            return <AntDesign name="swap" size={size} color={iconColor} style={style} />
        case "flanks":
            return <FontAwesome5 name="grip-lines-vertical" size={size} color={iconColor} style={style} />
        case "flat-bottom":
            return <FontAwesome5 name="eject" size={size} color={iconColor} style={style} />
        case "disc":
            return <Ionicons name="disc" size={size} color={iconColor} style={style} />
        case "arrow-up":
            return <AntDesign name="arrow-up" size={size} color={iconColor} style={style} />
        case "arrow-down":
            return <AntDesign name="arrow-down" size={size} color={iconColor} style={style} />
        case "question-circle":
            return <AntDesign name="question-circle" size={size} color={iconColor} style={style} />
        case "caret-down-sharp":
            return <Ionicons name="caret-down-sharp" size={size} color={iconColor} style={style} />
        case "settings":
            return <MaterialIcons name="settings" size={size} color={iconColor} style={style} />
        case "wrench":
            return <FontAwesome name="wrench" size={size} color={iconColor} style={style} />
        case "dashboard":
            return <AntDesign name="dashboard" size={size} color={iconColor} style={style} />
        case "wind":
            return <Feather name="wind" size={size} color={iconColor} style={style} />
        case "chassis":
            return <MaterialIcons name="view-in-ar" size={size} color={iconColor} style={style} />
    }
}
