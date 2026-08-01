import { StyleSheet } from "react-native";
import { ThemeVariables } from "./variables";

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

    //Icons
    icon: {
      borderRadius: 100,
      padding: 8,
    },

    //Utils
    absolute: {
      position: "absolute",
      top: 14,
      right: 14,
    },
  });

export type Styles = ReturnType<typeof createStyles>;
