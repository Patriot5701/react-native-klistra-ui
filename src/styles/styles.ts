import { StyleSheet } from "react-native";
import type { ThemeVariables } from "./variables";

export const createStyles = (v: ThemeVariables) =>
    StyleSheet.create({
        //Buttons
        button: {
            backgroundColor: v["text-body"],
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: v["component-border-radius"],
            alignItems: "center",
            justifyContent: "center",
        },
        buttonSmall: {
            backgroundColor: v["text-body"],
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderRadius: v["component-border-radius"],
            alignItems: "center",
        },
        buttonText: {
            color: v["bg-body"],
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
        },
        buttonSmallText: {
            color: v["bg-body"],
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 12,
        },

        //Badges
        badge: {
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: v["component-border-radius"],
            fontSize: 12,
            fontWeight: "bold",
            borderWidth: 1,
            borderColor: "transparent",
        },

        //Chips
        chip: {
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: v["component-border-radius"],
            borderWidth: 1,
            borderColor: v["border-color"],
            backgroundColor: v["bg-card"],
        },
        chipText: {
            color: v["text-secondary"],
            fontSize: 12,
        },

        //Icons
        icon: {
            borderRadius: 100,
            padding: 8,
        },

        card: {
            backgroundColor: v["bg-card"],
            borderColor: v["border-color"],
            padding: v["padding"],
            borderRadius: v["border-radius"],
            borderWidth: 1,
            position: 'relative',
            flexDirection: "column",
            gap: v["gap"],
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
        },

        //Input
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderColor: v['border-color'],
            borderRadius: v['component-border-radius'],
            minWidth: 100,
            backgroundColor: v['bg-form'],
            paddingHorizontal: v.padding,
            paddingVertical: 10,
        },

        //Utils
        absolute: {
            position: "absolute",
            top: 14,
            right: 14,
        },
    });

export type Styles = ReturnType<typeof createStyles>;
