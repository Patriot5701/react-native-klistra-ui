import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import Collapsible, { type CollapsibleProps } from "react-native-collapsible";
import { Icon } from "./Icon";
import { useStyles } from "../styles/useStyles";
import { useTheme } from "../config/ThemeContext";

type MakePropsOptional<T> = {
    [K in keyof T]?: T[K];
};

interface Props {
    expanded?: boolean | null;
    onToggle?: (open: boolean) => void;
    initExpanded?: boolean;
    duration?: number;
    collapsibleProps?: MakePropsOptional<CollapsibleProps>;
    TouchableComponent?: React.ComponentType<any>;
    children: React.ReactNode;
    title?: string | React.ReactNode;
    noArrow?: boolean;
    unmountOnCollapse?: boolean;
    collapsibleBackgroundColor?: string;
    collapsibleTextColor?: string;
}

export const Accordion = ({
    children,
    expanded = null,
    onToggle,
    unmountOnCollapse = false,
    noArrow = false,
    initExpanded = false,
    title = "",
    duration = 300,
    collapsibleProps = {},
    TouchableComponent = TouchableOpacity,
    collapsibleBackgroundColor,
    collapsibleTextColor,
}: Props) => {
    const styles = useStyles();
    const theme = useTheme();
    const collapsibleBg = collapsibleBackgroundColor ?? theme["bg-card"];
    const collapsibleColor = collapsibleTextColor ?? theme["text-body"];

    const controlled = expanded !== null;
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initExpanded);
    const open = controlled ? !!expanded : uncontrolledOpen;

    // Monté tant que ouvert ; avec unmountOnCollapse, reste jusqu’à la fin de l’anim.
    const [mounted, setMounted] = useState(() => open || !unmountOnCollapse);

    const rotateAngle = 180;
    const rotateAnim = useRef(new Animated.Value(open ? rotateAngle : 0)).current;
    const rotateAnimDeg = rotateAnim.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"],
    });

    useEffect(() => {
        if (open) {
            setMounted(true);
        } else if (!unmountOnCollapse) {
            setMounted(true);
        }
    }, [open, unmountOnCollapse]);

    useEffect(() => {
        Animated.timing(rotateAnim, {
            toValue: open ? rotateAngle : 0,
            duration,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    }, [open, duration, rotateAnim]);

    const handleAnimationEnd = () => {
        if (unmountOnCollapse && !open) {
            setMounted(false);
        }
    };

    const handleToggle = () => {
        const next = !open;
        if (!controlled) {
            setUncontrolledOpen(next);
        }
        onToggle?.(next);
    };

    const HeaderElement = typeof title === "string"
        ? <Text style={[{ color: collapsibleColor }]}>{title}</Text>
        : title;

    return (
        <TouchableComponent style={[styles.card, { backgroundColor: collapsibleBg }]} onPress={handleToggle}>
            <View>
                {HeaderElement}
                {
                    noArrow ? null : (
                        <Animated.View style={[{ transform: [{ rotate: rotateAnimDeg }], position: "absolute", top: theme.padding / 2.0, right: theme.padding / 2.0 }, open && { bottom: 4 }]}>
                            <Icon name="caret-down-sharp" size={12} color={collapsibleColor} />
                        </Animated.View>
                    )
                }
            </View>
            <View style={{ width: "100%" }}>
                <View style={[{ width: "100%", borderWidth: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0 }, open && { paddingBottom: 16 }]}>
                    {
                        mounted &&
                        <Collapsible onAnimationEnd={handleAnimationEnd} collapsed={!open} {...{ duration, ...collapsibleProps }}>
                            {children}
                        </Collapsible>
                    }
                </View>
            </View>
        </TouchableComponent>
    );
}