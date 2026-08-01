# react-native-klistra-ui

Librairie de composants React Native avec thème light / dark personnalisable.

## Installation

```bash
npm install react-native-klistra-ui
```

Les peer dependencies (`react`, `react-native`, `react-native-reanimated`, `@expo/vector-icons`) sont en général installées automatiquement (npm 7+). Ajoute-les manuellement seulement si ton gestionnaire de paquets te le demande.

### Développement local

```bash
# dans react-native-klistra-ui
npm install
npm run build

# dans ton app
npm install file:../react-native-klistra-ui
```

| Script        | Description                                      |
|---------------|--------------------------------------------------|
| `npm run build`     | Build via [bob](https://github.com/callstack/react-native-builder-bob) → `lib/` (ESM + `.d.ts`) |
| `npm run prepare`   | Lance le build à l’install / publish             |
| `npm run typecheck` | Vérifie les types TypeScript                     |

Structure : sources dans `src/`, sortie compilée dans `lib/` (ignoré par git).

## Utilisation rapide

Sans `ThemeProvider`, le thème **light** s’applique par défaut.

```tsx
import {
  ThemeProvider,
  Btn,
  Badge,
  Icon,
  IconBadge,
  Progress,
} from "react-native-klistra-ui";

export default function App() {
  return (
    <>
      <Btn
        text="Valider"
        color="#fff"
        background="#1e1e1e"
        onPress={() => {}}
      />
      <Badge text="Nouveau" color="#0A84FF" />
      <Icon name="settings" size={24} color="#1e1e1e" />
      <IconBadge
        name="alert"
        size={16}
        color="#925400"
        backgroundColor="#feefcb"
      />
      <Progress
        step={2}
        nbSteps={5}
        color="#0A84FF"
        backgroundColor="#E5E5E5"
      />
    </>
  );
}
```

---

## Composants

### `Btn`

Bouton tactile avec gestion automatique d’un état de chargement. Pendant l’exécution de `onPress` (y compris si async), un `ActivityIndicator` remplace le contenu et le bouton est désactivé.

```tsx
<Btn
  text="Valider"
  color="#fff"
  background="#1e1e1e"
  onPress={async () => {
    await save();
  }}
/>

<Btn
  small
  text="Ajouter"
  color="#fff"
  background="#0A84FF"
  icon="add"
  onPress={() => {}}
/>
```

| Prop         | Type                               | Défaut  | Description                               |
|--------------|------------------------------------|---------|-------------------------------------------|
| `color`      | `string`                           | —       | Couleur du texte, de l’icône et du loader |
| `background` | `string`                           | —       | Couleur de fond                           |
| `onPress`    | `(event) => void \| Promise<void>` | —       | Callback au tap (sync ou async)           |
| `text`       | `string`                           | —       | Libellé (uppercase via les styles)        |
| `icon`       | `string`                           | —       | Nom d’icône (voir `Icon`)                 |
| `small`      | `boolean`                          | `false` | Variante compacte                         |
| `disabled`   | `boolean`                          | `false` | Désactive les interactions                |

---

### `Badge`

Petit label coloré. Le fond est dérivé de `color` avec une transparence (`color + '1A'`). Peut afficher un texte, ou des `children`. Avec `floating`, position absolute (coin haut-droit).

```tsx
<Badge text="Nouveau" color="#0A84FF" />
<Badge text={3} color="#FF3B30" floating />

<Badge color="#0A84FF">
  <Icon name="alert" size={12} color="#0A84FF" />
</Badge>
```

| Prop       | Type               | Défaut  | Description                                       |
|------------|--------------------|---------|---------------------------------------------------|
| `text`     | `string \| number` | —       | Contenu texte (ignoré si `children`)              |
| `color`    | `string`           | —       | Couleur du texte et base du fond semi-transparent |
| `floating` | `boolean`          | `false` | Position absolute (haut-droite)                   |
| `style`    | `Object`           | —       | Styles additionnels                               |
| `children` | `ReactNode`        | —       | Contenu custom                                    |

---

### `Icon`

Icône unifiée basée sur `@expo/vector-icons`. Un nom logique est mappé vers la bonne famille. Un nom inconnu affiche un point (`ellipse`).

```tsx
<Icon name="settings" size={24} color="#1e1e1e" />
<Icon name="add" size={16} color="#0A84FF" />
```

| Prop    | Type                   | Défaut | Description                    |
|---------|------------------------|--------|--------------------------------|
| `name`  | `string`               | —      | Identifiant logique de l’icône |
| `size`  | `number`               | —      | Taille en pixels               |
| `color` | `string`               | —      | Couleur                        |
| `style` | `StyleProp<TextStyle>` | —      | Style additionnel              |

**Noms disponibles :** `add`, `alert`, `brand`, `calendar`, `car`, `close`, `driver`, `exit`, `left`, `menu`, `minus`, `money`, `rankings`, `return`, `right`, `stats`, `building`, `front-wing`, `rear-wing`, `suspension`, `flanks`, `flat-bottom`, `disc`, `arrow-up`, `arrow-down`, `question-circle`, `caret-down-sharp`, `settings`, `wrench`, `dashboard`, `wind`, `chassis`.

---

### `IconBadge`

Icône dans un conteneur circulaire coloré. Optionnellement avec bordure via `borderColor`.

```tsx
<IconBadge
  name="alert"
  size={16}
  color="#925400"
  backgroundColor="#feefcb"
/>

<IconBadge
  name="settings"
  size={20}
  color="#fff"
  backgroundColor="#1e1e1e"
  borderColor="#DDDDDD"
/>
```

| Prop              | Type     | Défaut | Description                          |
|-------------------|----------|--------|--------------------------------------|
| `name`            | `string` | —      | Nom d’icône (voir `Icon`)            |
| `size`            | `number` | —      | Taille de l’icône                    |
| `color`           | `string` | —      | Couleur de l’icône                   |
| `backgroundColor` | `string` | —      | Couleur de fond du cercle            |
| `borderColor`     | `string` | —      | Si défini, ajoute une bordure de 1px |

---

### `Progress`

Barre de progression animée (Reanimated). Remplissage = `step / nbSteps`. Sans `width`, largeur = écran − `padding` du thème.

```tsx
<Progress
  step={2}
  nbSteps={5}
  color="#0A84FF"
  backgroundColor="#E5E5E5"
/>

<Progress step={1} nbSteps={3} width={200} color="#34C759" />
```

| Prop              | Type     | Défaut                        | Description                                   |
|-------------------|----------|-------------------------------|-----------------------------------------------|
| `step`            | `number` | —                             | Étape courante (clampée entre 0 et `nbSteps`) |
| `nbSteps`         | `number` | —                             | Nombre total d’étapes                         |
| `color`           | `string` | —                             | Couleur de la barre remplie                   |
| `backgroundColor` | `string` | —                             | Couleur du fond de la piste                   |
| `width`           | `number` | largeur écran − padding thème | Largeur totale de la barre                    |

---

## Personnalisation du thème

Envelopper l’application (ou une partie) avec `ThemeProvider`. Sans provider, le thème **light** s’applique par défaut.

### Mode light / dark

```tsx
import { ThemeProvider, Btn } from "react-native-klistra-ui";

export default function App() {
  return (
    <ThemeProvider mode="dark">
      <Btn text="OK" color="#fff" background="#333" onPress={() => {}} />
    </ThemeProvider>
  );
}
```

- `mode="light"` — thème clair (défaut), basé sur `lightTheme`
- `mode="dark"` — thème sombre, basé sur `darkTheme`

Tu peux basculer dynamiquement selon l’état de ton app :

```tsx
const [mode, setMode] = useState<"light" | "dark">("light");

<ThemeProvider mode={mode}>
  {/* ... */}
</ThemeProvider>
```

Ou suivre le thème système avec `useColorScheme()` de React Native :

```tsx
import { useColorScheme } from "react-native";
import { ThemeProvider } from "react-native-klistra-ui";

export default function App() {
  const scheme = useColorScheme(); // "light" | "dark" | null

  return (
    <ThemeProvider mode={scheme === "dark" ? "dark" : "light"}>
      {/* ton app */}
    </ThemeProvider>
  );
}
```

### Customiser les tokens (overrides)

Passer un objet `theme` partiel : seules les clés fournies remplacent celles du mode actif (`light` ou `dark`).

```tsx
import { ThemeProvider } from "react-native-klistra-ui";

export default function App() {
  return (
    <ThemeProvider
      mode="light"
      theme={{
        primary: "#0A84FF",
        "bg-body": "#F0F4FF",
        "text-body": "#0A1628",
        "component-border-radius": 12,
        gap: 20,
        padding: 24,
      }}
    >
      {/* ton app */}
    </ThemeProvider>
  );
}
```

Les overrides s’appliquent **par-dessus** le mode : tu peux donc avoir un dark mode + ta marque (`primary`, radius, etc.) sans redéfinir tout le thème.

### Props de `ThemeProvider`

| Prop       | Type                      | Défaut    | Description                            |
|------------|---------------------------|-----------|----------------------------------------|
| `mode`     | `"light" \| "dark"`       | `"light"` | Thème de base                          |
| `theme`    | `Partial<ThemeVariables>` | —         | Overrides fusionnés par-dessus le mode |
| `children` | `ReactNode`               | —         | Contenu                                |

### Accéder au thème dans ton code

```tsx
import { useTheme, useThemeMode } from "react-native-klistra-ui";
import { View, Text } from "react-native";

function MyScreen() {
  const theme = useTheme();
  const mode = useThemeMode();

  return (
    <View
      style={{
        backgroundColor: theme["bg-body"],
        padding: theme.padding,
        gap: theme.gap,
      }}
    >
      <Text style={{ color: theme["text-body"] }}>
        Mode actuel : {mode}
      </Text>
      <Text style={{ color: theme.primary }}>Couleur primaire</Text>
    </View>
  );
}
```

### Tokens disponibles (`ThemeVariables`)

#### Couleurs sémantiques

| Token               | Type     | Description              |
|---------------------|----------|--------------------------|
| `primary`           | `string` | Couleur primaire         |
| `secondary`         | `string` | Couleur secondaire       |
| `danger`            | `string` | Erreur / danger          |
| `warning`           | `string` | Avertissement            |
| `success`           | `string` | Succès                   |
| `info`              | `string` | Information              |
| `primaryContrast`   | `string` | Contraste sur `primary`  |
| `secondaryContrast` | `string` | Contraste sur `secondary`|
| `dangerContrast`    | `string` | Contraste sur `danger`   |
| `warningContrast`   | `string` | Contraste sur `warning`  |
| `successContrast`   | `string` | Contraste sur `success`  |
| `infoContrast`      | `string` | Contraste sur `info`     |

#### Surfaces & texte

| Token            | Type     | Description      |
|------------------|----------|------------------|
| `bg-body`        | `string` | Fond principal   |
| `bg-secondary`   | `string` | Fond secondaire  |
| `bg-card`        | `string` | Fond carte       |
| `text-body`      | `string` | Texte principal  |
| `text-secondary` | `string` | Texte secondaire |
| `text-disabled`  | `string` | Texte désactivé  |
| `border-color`   | `string` | Bordure          |

#### Tailles

| Token                     | Type     | Description           |
|---------------------------|----------|-----------------------|
| `gap`                     | `number` | Espacement            |
| `padding`                 | `number` | Padding               |
| `border-radius`           | `number` | Radius général        |
| `component-border-radius` | `number` | Radius des composants |

Les thèmes de base sont aussi exportés (`lightTheme`, `darkTheme`) si tu veux t’en servir comme référence.

### API thème

| Export            | Rôle                                    |
|-------------------|-----------------------------------------|
| `ThemeProvider`   | Fournit le thème aux composants         |
| `useTheme()`      | Retourne les tokens du thème actif      |
| `useThemeMode()`  | Retourne `"light"` ou `"dark"`          |
| `lightTheme`      | Thème clair par défaut                  |
| `darkTheme`       | Thème sombre par défaut                 |
| `createStyles(v)` | Factory de styles à partir d’un thème   |
| `useStyles()`     | Styles générés à partir du thème actif  |
| `ThemeVariables`  | Type TypeScript des tokens              |
| `ThemeMode`       | Type `"light" \| "dark"`                |

## Licence

MIT
