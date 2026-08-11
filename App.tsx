import { useState } from "react";
import { ScrollView, Text, View,} from "react-native";
import { Accordion, Badge, Btn, Chip, DatePicker, Icon, IconBadge, Input, Progress, ThemeProvider, useTheme, useThemeMode, type ThemeMode } from "./src";

function Playground() {
    const theme = useTheme();
    const mode = useThemeMode();
    const [selected, setSelected] = useState("all");

    return (
        <View style={{ flex: 1, backgroundColor: theme["bg-body"], paddingVertical: 64 }}>
            <ScrollView contentContainerStyle={{ padding: theme.padding, gap: theme.gap, }} >
                <Text style={{ color: theme["text-body"], fontSize: 22, fontWeight: "700", textAlign: "center" }} >
                    Klistra UI
                </Text>
                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    Playground local — mode {mode}
                </Text>

                
                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    Buttons
                </Text>

                <View style={{ flexDirection: "row", gap: theme.gap }}>
                    <Btn text="Primary" onPress={async () => {}} />
                    <Btn text="Secondary" secondary onPress={async () => {}} />
                    <Btn text="Danger" danger onPress={async () => {}} />
                </View>
                <View style={{ flexDirection: "row", gap: theme.gap }}>
                    <Btn text="Success" success onPress={async () => {}} />
                    <Btn text="Info" info onPress={async () => {}} />
                    <Btn text="Tertiary" tertiary onPress={async () => {}} />
                    <Btn text="Warning" warning onPress={async () => {}} />
                </View>

                
                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    Badges
                </Text>

                <View style={{ flexDirection: "row", gap: theme.gap / 2, alignItems: "center" }}>
                    <Badge text="Badge primaire" />
                    <Badge text="Badge secondaire" secondary />
                    <Badge text="Badge ternaire" tertiary />
                </View>
                <View style={{ flexDirection: "row", gap: theme.gap / 2, alignItems: "center" }}>
                    <Badge text="Badge warning" warning />
                    <Badge text="Badge success" success />
                    <Badge text="Badge info" info />
                </View>
                <View style={{ flexDirection: "row", gap: theme.gap / 2, alignItems: "center" }}>
                    <Badge text="Badge danger" danger />
                </View>

                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    IconBadges
                </Text>
                <View style={{ flexDirection: "row", gap: theme.gap, alignItems: "center" }}>
                    <IconBadge name="alert" size={16} />
                    <IconBadge name="alert" size={16} warning />
                    <IconBadge name="alert" size={16} secondary />
                    <IconBadge name="alert" size={16} tertiary />
                    <IconBadge name="alert" size={16} danger />
                    <IconBadge name="alert" size={16} success />
                    <IconBadge name="alert" size={16} info />
                </View>

                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    Icon
                </Text>
                
                <Icon name="settings" size={24} color={theme["text-body"]} />

                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    DatePicker
                </Text>

                <View style={{ flexDirection: "row", gap: theme.gap, alignItems: "center" }}>
                    <DatePicker hasText hasIcon />
                </View>

                <Progress step={2} nbSteps={5} />

                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                    <Chip
                        text="Tous"
                        isSelected={selected === "all"}
                        onPress={() => setSelected("all")}
                    />
                    <Chip
                        text="Succès"
                        success
                        isSelected={selected === "done"}
                        onPress={() => setSelected("done")}
                    />
                </View>

                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    Input
                </Text>
                <Input placeholder="Entrez votre texte" />

                <Text style={{ color: theme["text-secondary"], textAlign: "center" }}>
                    Accordions
                </Text>

                <Accordion title="Accordion 1">
                    <Text style={{ color: theme["text-body"] }}>Content 1</Text>
                </Accordion>
            </ScrollView>
        </View>
    );
}

export default function App() {
    const [mode, setMode] = useState<ThemeMode>("light");

    return (
        <ThemeProvider mode={mode}>
            <View style={{ flex: 1 }}>
                <Playground />
                <View>
                    <View style={{ padding: 32, alignItems: "center" }}>
                        <Btn
                            onPress={() =>
                                setMode((m) => (m === "light" ? "dark" : "light"))
                            }
                            text={`Toggle ${mode === "light" ? "dark" : "light"}`}
                        />
                    </View>
                </View>
            </View>
        </ThemeProvider>
    );
}
