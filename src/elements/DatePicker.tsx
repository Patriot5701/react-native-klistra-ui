import { useState } from "react";
import { Modal, Platform, Pressable, Text, View } from "react-native";
import DateTimePicker, { type DateTimePickerChangeEvent } from "@react-native-community/datetimepicker";
import { Btn } from "./Button";
import { useTheme } from "../config/ThemeContext";

type Props = {
    hasText?: boolean;
    backgroundColor?: string;
    textColor?: string;
    initialDate?: Date;
    onDateChange?: (date: Date) => void;
    onDateConfirm?: (date: Date) => void;
    hasIcon?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    info?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    disabled?: boolean;
    small?: boolean;
}

export const DatePicker = ({
    hasText = false,
    backgroundColor,
    textColor,
    initialDate = new Date(),
    onDateChange,
    onDateConfirm,
    hasIcon = true,
    secondary = false,
    tertiary = false,
    info = false,
    danger = false,
    warning = false,
    success = false,
    disabled = false,
    small = false,
}: Props) => {
    const [openPicker, setOpenPicker] = useState(false);
    const [date, setDate] = useState(initialDate);
    const theme = useTheme();

    const bgColor = backgroundColor ?? (secondary ? theme.secondary : tertiary ? theme.tertiary : info ? theme.info : danger ? theme.danger : warning ? theme.warning : success ? theme.success : theme.primary);
    const textColorUsed = textColor ?? (secondary ? theme.secondaryContrast : tertiary ? theme.tertiaryContrast : info ? theme.infoContrast : danger ? theme.dangerContrast : warning ? theme.warningContrast : success ? theme.successContrast : theme.primaryContrast);

    const applyDate = (selectedDate: Date, confirm: boolean) => {
        setDate(selectedDate);
        onDateChange?.(selectedDate);
        if (confirm) {
            onDateConfirm?.(selectedDate);
        }
    }

    const handleChange = (_event: DateTimePickerChangeEvent, selectedDate?: Date) => {
        setOpenPicker(false);
        if (selectedDate) {
            applyDate(selectedDate, Platform.OS === "android");
        }
    }

    const handleConfirm = () => {
        setOpenPicker(false);
        applyDate(date, true);
    }

    return (
        <>
            <Btn
                icon={hasIcon ? "calendar" : undefined}
                text={hasText ? date.toLocaleDateString("fr-FR") : undefined}
                onPress={() => setOpenPicker(true)}
                background={bgColor}
                color={textColorUsed}
                disabled={disabled}
                small={small}
                secondary={secondary}
                tertiary={tertiary}
                info={info}
                danger={danger}
                warning={warning}
                success={success}
            />

            {openPicker && Platform.OS === "android" && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onValueChange={handleChange}
                    locale="fr-FR"
                />
            )}

            {Platform.OS === "ios" && (
                <Modal
                    visible={openPicker}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setOpenPicker(false)}
                >
                    <Pressable
                        style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#00000066" }}
                        onPress={() => setOpenPicker(false)}
                    >
                        <Pressable
                            onPress={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: theme["bg-card"],
                                borderTopLeftRadius: theme["border-radius"],
                                borderTopRightRadius: theme["border-radius"],
                                paddingBottom: theme.padding,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    padding: theme.padding,
                                }}
                            >
                                <Pressable onPress={() => setOpenPicker(false)}>
                                    <Text style={{ color: theme["text-secondary"] }}>Annuler</Text>
                                </Pressable>
                                <Pressable onPress={handleConfirm}>
                                    <Text style={{ color: bgColor, fontWeight: "600" }}>OK</Text>
                                </Pressable>
                            </View>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="spinner"
                                onValueChange={handleChange}
                                locale="fr-FR"
                            />
                        </Pressable>
                    </Pressable>
                </Modal>
            )}
        </>
    )
}
