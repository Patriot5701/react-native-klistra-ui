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
    initExpanded?: boolean;
    duration?: number;
    collapsibleProps?: MakePropsOptional<CollapsibleProps>;
    TouchableComponent?: React.ComponentType<any>;
    children: React.ReactNode;
    title?: string | React.ReactNode;
    noArrow?: boolean;
    unmountOnCollapse?: boolean;
    collapsableBackgroundColor?: string;
    collapsableTextColor?: string;
}

export const Accordion = ({ children, expanded = null, unmountOnCollapse = false, noArrow = false, initExpanded = false, title = "", duration = 300, collapsibleProps = {}, TouchableComponent = TouchableOpacity, collapsableBackgroundColor, collapsableTextColor }: Props) => {
    const styles = useStyles();
    const theme = useTheme();
    const collapsableBg = collapsableBackgroundColor ?? theme["bg-card"];
    const collapsableColor = collapsableTextColor ?? theme["text-body"];

    let controlled = expanded !== null;
    const [show, setShow] = useState(initExpanded);
    const [mounted, setMounted] = useState(initExpanded);

    const rotateAnim = useRef(new Animated.Value(0)).current;

    if(controlled && !mounted && expanded) setMounted(true);
    
    const handleArrowRotate = (open: boolean | null = null) => {
        const _open = open === null ? show : open;
        Animated.timing(rotateAnim, {
            toValue: _open ? rotateAngle : 0,
            duration,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    }

    const handleAnimationEnd = () => {
        if (unmountOnCollapse && !show) setMounted(false);
    };

    const handleToggleShow = () => {
        if (!controlled)
            if (!mounted) {
                if (!show) setMounted(true);
            } else {
                setShow(!show);
            }
    };

    const rotateAngle = 180;
    const rotateAnimDeg = rotateAnim.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"],
    });

    useEffect(() => {
        if (mounted) {
          setShow(true);
        }
    }, [mounted]);

    useEffect(() => {
        rotateAnim.setValue(show ? rotateAngle : 0);
    }, []);

    useEffect(() => {
        if (mounted) handleArrowRotate(show);
    }, [show, mounted]);

    useEffect(() => {
        if (controlled && show !== expanded) setShow(!!expanded);
    }, [controlled, expanded, show]);

    const HeaderElement = typeof title === "string" ? <Text style={[{ color: collapsableColor }]}>{title}</Text> : title;

    return (
        <TouchableComponent style={[styles.card, { backgroundColor: collapsableBg }]} onPress={handleToggleShow}>
            <View>
                {HeaderElement}
                {
                    noArrow ? null : (
                        <Animated.View style={[{ transform: [{ rotate: rotateAnimDeg}], position: 'absolute', top: theme.padding / 2.0, right: theme.padding / 2.0}, show && { bottom: 4}]}>
                            <Icon name="caret-down-sharp" size={12} color={collapsableColor} />
                        </Animated.View>
                    )
                }
            </View>
            <View style={{ width: '100%'}}>
                <View style={[{ width: '100%', borderWidth: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0}, show && { paddingBottom: 16}]}>
                {
                    mounted &&
                    <Collapsible onAnimationEnd={handleAnimationEnd} collapsed={!show} {...{duration, ...collapsibleProps}}>
                        {children}
                    </Collapsible>
                }
                </View>
            </View>
        </TouchableComponent>
    )

}