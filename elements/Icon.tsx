import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons"
import { StyleProp, TextStyle } from "react-native";

type Props = {
    name: string,
    size: number,
    color: string,
    style?: StyleProp<TextStyle>,
}

export const Icon = ({ name, size, color, style }: Props) => {
    switch(name) {
        case "add":
            return <FontAwesome name="plus" size={size} color={color} style={style} />
        case "alert":
            return <Ionicons name="megaphone" size={size} color={color} style={style} />
        case "brand":
            return <AntDesign name="trademark" size={size} color={color} style={style} />
        case "calendar":
            return <Ionicons name="calendar-clear-outline" size={size} color={color} style={style} />
        case "car":
            return <Ionicons name="car-sport" size={size} color={color} style={style} />
        case "close":
            return <AntDesign name="close" size={size} color={color} style={style} />
        case "driver":
            return <MaterialIcons name="sports-motorsports" size={size} color={color} style={style} />
        case "exit":
            return <Ionicons name="exit" size={size} color={color} style={style} />
        case "left":
            return <AntDesign name="caret-left" size={size} color={color} style={style} />
        case "menu":
            return <Ionicons name="apps-sharp" size={size} color={color} style={style} />
        case "minus":
            return <Entypo name="minus" size={size} color={color} style={style} />
        case "money":
            return <Ionicons name="logo-euro" size={size} color={color} style={style} />
        case "rankings":
            return <Ionicons name="podium" size={size} color={color} style={style} />
        case "return":
            return <Ionicons name="arrow-back" size={size} color={color} style={style} />
        case "right":
            return <AntDesign name="caret-right" size={size} color={color} style={style} />
        case "stats":
            return <AntDesign name="radar-chart" size={size} color={color} style={style} />
        case "building":
            return <FontAwesome5 name="building" size={size} color={color} style={style} />
        case "front-wing":
            return <AntDesign name="swap-right" size={size} color={color} style={style} />
        case "rear-wing":
            return <AntDesign name="swap-left" size={size} color={color} style={style} />
        case "suspension":
            return <AntDesign name="swap" size={size} color={color} style={style} />
        case "flanks":
            return <FontAwesome5 name="grip-lines-vertical" size={size} color={color} style={style} />
        case "flat-bottom":
            return <FontAwesome5 name="eject" size={size} color={color} style={style} />
        case "disc":
            return <Ionicons name="disc" size={size} color={color} style={style} />
        case "arrow-up":
            return <AntDesign name="arrow-up" size={size} color={color} style={style} />
        case "arrow-down":
            return <AntDesign name="arrow-down" size={size} color={color} style={style} />
        case "question-circle":
            return <AntDesign name="question-circle" size={size} color={color} style={style} />
        case "caret-down-sharp":
            return <Ionicons name="caret-down-sharp" size={size} color={color} style={style} />
        case "settings":
            return <MaterialIcons name="settings" size={size} color={color} style={style} />
        case "wrench":
            return <FontAwesome name="wrench" size={size} color={color} style={style} />
        case "dashboard":
            return <AntDesign name="dashboard" size={size} color={color} style={style} />
        case "wind":
            return <Feather name="wind" size={size} color={color} style={style} />
        case "chassis":
            return <MaterialIcons name="view-in-ar" size={size} color={color} style={style} />
        default:
            return <Ionicons name="ellipse" size={size} color={color} style={style} />
    }
}
