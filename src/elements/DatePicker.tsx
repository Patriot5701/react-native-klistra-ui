import { useState } from "react";
import { Btn } from "./Button";
import { useTheme } from "../config/ThemeContext";
import DatePickerComponent from "react-native-date-picker";

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

export const DatePicker = ({ hasText = false, backgroundColor, textColor, initialDate = new Date(), onDateChange, onDateConfirm, hasIcon = true, secondary = false, tertiary = false, info = false, danger = false, warning = false, success = false, disabled = false, small = false }: Props) => {
    const [openPicker, setOpenPicker] = useState(false);
    const [date, setDate] = useState(initialDate);

    const theme = useTheme();
    
    const bgColor = backgroundColor ?? (secondary ? theme.secondary : tertiary ? theme.tertiary : info ? theme.info : danger ? theme.danger : warning ? theme.warning : success ? theme.success : theme.primary);
    const textColorUsed = textColor ?? (secondary ? theme.secondaryContrast : tertiary ? theme.tertiaryContrast : info ? theme.infoContrast : danger ? theme.dangerContrast : warning ? theme.warningContrast : success ? theme.successContrast : theme.primaryContrast);


    const handleDateChange = (selectedDate: Date) => {
        setDate(selectedDate);
        if (onDateChange) {
            onDateChange(selectedDate);
        }
    }
    const handleDateConfirm = (selectedDate: Date) => {
        setOpenPicker(false);
        setDate(selectedDate);
        if (onDateConfirm) {
            onDateConfirm(selectedDate);
        }
    }
    return (
        <>

            <Btn 
                icon={hasIcon ? "calendar" : undefined} 
                text={hasText ? date.toLocaleDateString() : undefined} 
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
            <DatePickerComponent
                modal
                open={openPicker}
                date={date}
                mode="date"
                onDateChange={(selectedDate: Date) => {
                    handleDateChange(selectedDate);
                }}
                locale="fr-FR"
                theme="auto"
                buttonColor={bgColor}
                onConfirm={(selectedDate: Date) => {
                    handleDateConfirm(selectedDate);
                }}
                onCancel={() => setOpenPicker(false)}
            />
        </>
    )
}