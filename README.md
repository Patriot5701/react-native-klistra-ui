# react-native-klistra-ui

Librairie de composants React Native avec thème light / dark personnalisable.

## Installation

```bash
npm install react-native-klistra-ui
```

Les peer dependencies (`react`, `react-native`, `react-native-reanimated`, `react-native-worklets`, `@expo/vector-icons`) sont en général installées automatiquement (npm 7+). Ajoutez-les manuellement seulement si votre gestionnaire de paquets vous le demande.

`react-native-collapsible` et `react-native-date-picker` sont des dépendances de la lib (installées avec le package).

### Développement local

```bash
npm install
npm start
```

Expo tourne à la racine : le playground est `App.tsx` (imports depuis `./src`). Touche `a` / `i` / `w` pour Android, iOS ou web.

| Script              | Description                                                                      |
|---------------------|----------------------------------------------------------------------------------|
| `npm start`         | Lance le playground Expo (`App.tsx`)                                             |
| `npm run android`   | Expo → Android                                                                   |
| `npm run ios`       | Expo → iOS                                                                       |
| `npm run build`     | Build via [bob](https://github.com/callstack/react-native-builder-bob) → `lib/` |
| `npm run typecheck` | Vérifie les types TypeScript                                                     |

Pour lier la lib en local depuis une autre app :

```bash
# dans react-native-klistra-ui
npm run build

# dans ton app
npm install file:../react-native-klistra-ui
```

## Utilisation rapide

Sans `ThemeProvider`, le thème **light** s’applique par défaut. Les composants utilisent les couleurs du thème via des variantes (`primary`, `danger`, etc.).

```tsx
import {
  ThemeProvider,
  Btn,
  Badge,
  Icon,
  IconBadge,
  Progress,
  Chip,
  Input,
  Accordion,
  Card,
  DatePicker,
  type IconName,
} from "react-native-klistra-ui";

export default function App() {
  return (
    <ThemeProvider mode="light">
      <Btn text="Valider" onPress={() => {}} />
      <Btn text="Supprimer" danger onPress={() => {}} />
      <Badge text="Nouveau" />
      <Badge text="Erreur" danger />
      <Icon name="settings" size={24} color="#1e1e1e" />
      <IconBadge name="alert" size={16} warning />
      <Progress step={2} nbSteps={5} />
      <Chip text="Filtre" isSelected onPress={() => {}} />
      <Input placeholder="Email" />
      <Accordion title="Détails">
        <Badge text="Contenu" />
      </Accordion>
      <DatePicker hasText hasIcon />
    </ThemeProvider>
  );
}
```

### Variantes de couleur

`Btn`, `Badge`, `IconBadge`, `Progress`, `Chip` et `DatePicker` acceptent les mêmes flags de variante, basés sur les tokens du thème. Sans flag, la variante **primary** s’applique.

| Prop        | Défaut  | Token utilisé                                          |
|-------------|---------|--------------------------------------------------------|
| _(défaut)_  | —       | `primary` (+ `primaryContrast` pour le texte du bouton)|
| `secondary` | `false` | `secondary`                                            |
| `tertiary`  | `false` | `tertiary`                                             |
| `danger`    | `false` | `danger`                                               |
| `warning`   | `false` | `warning`                                              |
| `success`   | `false` | `success`                                              |
| `info`      | `false` | `info`                                                 |

Passer une seule variante à `true` (ex. `danger`). Vous pouvez aussi forcer des couleurs custom via `color` / `background` quand c’est supporté.

---

## Composants

### `Btn`

Bouton tactile avec état de chargement automatique. Pendant `onPress` (y compris async), un `ActivityIndicator` remplace le contenu. Par défaut : variante `primary` (fond `theme.primary`, texte `theme.primaryContrast`).

```tsx
<Btn text="Valider" onPress={async () => { await save(); }} />
<Btn text="Annuler" secondary onPress={() => {}} />
<Btn small text="Ajouter" icon="add" success onPress={() => {}} />
<Btn text="Custom" color="#fff" background="#111" onPress={() => {}} />
```

| Prop         | Type                               | Défaut  | Description                                      |
|--------------|------------------------------------|---------|--------------------------------------------------|
| `onPress`    | `(event) => void \| Promise<void>` | —       | Callback au tap (sync ou async)                  |
| `text`       | `string`                           | —       | Libellé (uppercase via les styles)               |
| `icon`       | `IconName`                         | —       | Nom d’icône typé (voir `Icon`)                   |
| `color`      | `string`                           | —       | Override couleur texte / icône / loader          |
| `background` | `string`                           | —       | Override couleur de fond                         |
| `small`      | `boolean`                          | `false` | Variante compacte                                |
| `disabled`   | `boolean`                          | `false` | Désactive les interactions                       |
| `secondary`… | `boolean`                          | voir ↑  | Variantes de couleur (voir section Variantes)    |

---

### `Badge`

Petit label coloré. Le fond est la couleur de variante (ou `color`) avec ~10 % d’opacité. Gère `#RGB` / `#RRGGBB` / `#RRGGBBAA` et `rgb` / `rgba` (un alpha déjà présent est remplacé). Peut afficher un texte ou des `children`. Avec `floating`, position absolute (coin haut-droit).

```tsx
<Badge text="Nouveau" />
<Badge text="Erreur" danger />
<Badge text={3} warning floating />

<Badge info>
  <Icon name="alert" size={12} color="#5bb7f8" />
</Badge>
```

| Prop         | Type               | Défaut  | Description                          |
|--------------|--------------------|---------|--------------------------------------|
| `text`       | `string \| number` | —       | Contenu texte (ignoré si `children`) |
| `color`      | `string`           | —       | Override couleur texte / base du fond|
| `floating`   | `boolean`          | `false` | Position absolute (haut-droite)      |
| `style`      | `Object`           | —       | Styles additionnels                  |
| `children`   | `ReactNode`        | —       | Contenu custom                       |
| `secondary`… | `boolean`          | voir ↑  | Variantes de couleur                 |

---

### `Icon`

Icône unifiée basée sur `@expo/vector-icons`. Un nom logique (`IconName`) est mappé vers la bonne famille. Le type est exporté pour `Btn`, `IconBadge`, etc. — un nom invalide ne compile pas.

```tsx
import { Icon, type IconName } from "react-native-klistra-ui";

const name: IconName = "settings";
<Icon name={name} size={24} color="#1e1e1e" />
<Icon name="add" size={16} color="#004999" />
```

| Prop    | Type                   | Défaut | Description                    |
|---------|------------------------|--------|--------------------------------|
| `name`  | `IconName`             | —      | Identifiant logique de l’icône |
| `size`  | `number`               | —      | Taille en pixels               |
| `color` | `string`               | —      | Couleur (défaut : `text-body`) |
| `style` | `StyleProp<TextStyle>` | —      | Style additionnel              |

**Noms disponibles (`IconName`) :** `add`, `alert`, `brand`, `calendar`, `car`, `close`, `driver`, `exit`, `left`, `menu`, `minus`, `money`, `pin`, `rankings`, `return`, `right`, `stats`, `building`, `front-wing`, `rear-wing`, `suspension`, `flanks`, `flat-bottom`, `disc`, `arrow-up`, `arrow-down`, `question-circle`, `caret-down-sharp`, `settings`, `wrench`, `dashboard`, `wind`, `chassis`.

---

### `IconBadge`

Icône dans un conteneur circulaire coloré selon la variante du thème. Optionnellement avec bordure via `borderColor`.

```tsx
<IconBadge name="alert" size={16} warning />
<IconBadge name="settings" size={20} borderColor="#DDDDDD" />
<IconBadge name="add" size={16} color="#fff" background="#111" />
```

| Prop          | Type       | Défaut | Description                          |
|---------------|------------|--------|--------------------------------------|
| `name`        | `IconName` | —      | Nom d’icône (voir `Icon`)            |
| `size`        | `number`   | —      | Taille de l’icône                    |
| `color`       | `string`   | —      | Override couleur de l’icône          |
| `background`  | `string`   | —      | Override couleur de fond             |
| `borderColor` | `string`   | —      | Si défini, ajoute une bordure de 1px |
| `secondary`…  | `boolean`  | voir ↑ | Variantes de couleur                 |

---

### `Progress`

Barre de progression animée (Reanimated). Remplissage = `step / nbSteps`. Si `nbSteps <= 0`, la barre reste à largeur nulle (pas de division par zéro). Sans `width`, largeur = écran − `padding` du thème. La barre utilise la variante ; le fond utilise le contraste associé.

```tsx
<Progress step={2} nbSteps={5} />
<Progress step={1} nbSteps={3} success width={200} />
<Progress step={4} nbSteps={5} color="#0A84FF" background="#E5E5E5" />
```

| Prop         | Type     | Défaut                        | Description                                   |
|--------------|----------|-------------------------------|-----------------------------------------------|
| `step`       | `number` | —                             | Étape courante (clampée entre 0 et `nbSteps`) |
| `nbSteps`    | `number` | —                             | Nombre total d’étapes                         |
| `color`      | `string` | —                             | Override couleur de la barre remplie          |
| `background` | `string` | —                             | Override couleur du fond de la piste          |
| `width`      | `number` | largeur écran − padding thème | Largeur totale de la barre                    |
| `secondary`… | `boolean`| voir ↑                        | Variantes de couleur                          |

---

### `Chip`

Pastille sélectionnable (filtre / tag). Non sélectionné : fond `bg-card` et bordure du thème. Sélectionné : couleurs de la variante (ou overrides).

```tsx
const [selected, setSelected] = useState("all");

<Chip
  text="Tous"
  isSelected={selected === "all"}
  onPress={() => setSelected("all")}
/>
<Chip
  text="Terminé"
  success
  isSelected={selected === "done"}
  onPress={() => setSelected("done")}
/>
```

| Prop                 | Type         | Défaut  | Description                         |
|----------------------|--------------|---------|-------------------------------------|
| `text`               | `string`     | —       | Libellé                             |
| `isSelected`         | `boolean`    | —       | État sélectionné                    |
| `onPress`            | `() => void` | —       | Callback au tap                     |
| `selectedBackground` | `string`     | —       | Override fond quand sélectionné     |
| `selectedColor`      | `string`     | —       | Override texte quand sélectionné    |
| `secondary`…         | `boolean`    | voir ↑  | Variantes de couleur                |

---

### `Input`

Champ texte stylé avec le thème (`bg-form`, bordure, `text-disabled` pour le placeholder).

```tsx
const [value, setValue] = useState("");

<Input
  placeholder="Email"
  value={value}
  onChangeText={setValue}
  onSubmitEditing={() => {}}
/>
```

| Prop               | Type                                  | Défaut | Description              |
|--------------------|---------------------------------------|--------|--------------------------|
| `placeholder`      | `string`                              | —      | Placeholder              |
| `value`            | `string`                              | —      | Valeur contrôlée         |
| `onChangeText`     | `(text: string) => void`              | —      | Callback de saisie       |
| `onBlur`           | `() => void`                          | —      | Perte de focus           |
| `onFocus`          | `() => void`                          | —      | Prise de focus           |
| `onSubmitEditing`  | `() => void`                          | —      | Validation clavier       |
| `onEndEditing`     | `() => void`                          | —      | Fin d’édition            |
| `onSelectionChange`| `(event: TextInputSelectionChangeEvent) => void` | — | Changement de sélection |

---

### `Accordion`

Panneau repliable. **Non contrôlé** par défaut (`initExpanded`). **Contrôlé** si `expanded` est fourni (`true` / `false`) — utilise alors `onToggle` pour mettre à jour l’état parent. Avec `unmountOnCollapse`, le contenu est démonté après l’animation de fermeture.

```tsx
// Non contrôlé
<Accordion title="Détails" initExpanded>
  <Text>Contenu</Text>
</Accordion>

// Contrôlé
const [open, setOpen] = useState(false);

<Accordion title="Détails" expanded={open} onToggle={setOpen}>
  <Text>Contenu</Text>
</Accordion>
```

| Prop                         | Type                         | Défaut             | Description                                      |
|------------------------------|------------------------------|--------------------|--------------------------------------------------|
| `children`                   | `ReactNode`                  | —                  | Contenu du panneau                               |
| `title`                      | `string \| ReactNode`        | `""`               | En-tête                                          |
| `expanded`                   | `boolean \| null`            | `null`             | Mode contrôlé si non `null`                      |
| `onToggle`                   | `(open: boolean) => void`    | —                  | Notifié à chaque toggle (requis en contrôlé)     |
| `initExpanded`               | `boolean`                    | `false`            | Ouvert au montage (mode non contrôlé)            |
| `duration`                   | `number`                     | `300`              | Durée d’animation (ms)                           |
| `noArrow`                    | `boolean`                    | `false`            | Cache la flèche                                  |
| `unmountOnCollapse`          | `boolean`                    | `false`            | Démonte le contenu une fois replié               |
| `collapsibleBackgroundColor` | `string`                     | `bg-card`          | Fond de l’en-tête / carte                        |
| `collapsibleTextColor`       | `string`                     | `text-body`        | Couleur du titre / flèche                        |
| `collapsibleProps`           | `Partial<CollapsibleProps>`  | `{}`               | Props passées à `react-native-collapsible`       |
| `TouchableComponent`         | `ComponentType`              | `TouchableOpacity` | Composant tactile de l’en-tête                   |

---

### `Card`

Conteneur stylé (`bg-card`, padding, radius, ombre légère selon les styles du thème).

```tsx
<Card>
  <Badge text="Info" info />
  <Btn text="OK" onPress={() => {}} />
</Card>

<Card direction="row" style={{ gap: 8 }}>
  <Icon name="settings" size={20} />
  <Badge text="Réglages" />
</Card>
```

| Prop        | Type                    | Défaut     | Description            |
|-------------|-------------------------|------------|------------------------|
| `children`  | `ReactNode`             | —          | Contenu                |
| `direction` | `"row" \| "column"`     | `"column"` | `flexDirection`        |
| `style`     | `StyleProp<ViewStyle>`  | —          | Styles additionnels    |

---

### `DatePicker`

Bouton qui ouvre un modal de date (`react-native-date-picker`). Variantes de couleur comme `Btn`.

```tsx
<DatePicker
  hasText
  hasIcon
  initialDate={new Date()}
  onDateChange={(date) => console.log(date)}
  onDateConfirm={(date) => console.log("confirm", date)}
/>
<DatePicker hasText secondary small />
```

| Prop              | Type                   | Défaut       | Description                              |
|-------------------|------------------------|--------------|------------------------------------------|
| `hasText`         | `boolean`              | `false`      | Affiche la date formatée sur le bouton   |
| `hasIcon`         | `boolean`              | `true`       | Affiche l’icône `calendar`               |
| `initialDate`     | `Date`                 | `new Date()` | Date initiale                            |
| `onDateChange`    | `(date: Date) => void` | —            | Pendant le scroll du picker              |
| `onDateConfirm`   | `(date: Date) => void` | —            | À la confirmation                        |
| `backgroundColor` | `string`               | —            | Override fond du bouton                  |
| `textColor`       | `string`               | —            | Override texte / icône                   |
| `disabled`        | `boolean`              | `false`      | Désactive le bouton                      |
| `small`           | `boolean`              | `false`      | Bouton compact                           |
| `secondary`…      | `boolean`              | voir ↑       | Variantes de couleur                     |

---

## Personnalisation du thème

Envelopper l’application (ou une partie) avec `ThemeProvider`. Sans provider, le thème **light** s’applique par défaut.

### Mode light / dark

```tsx
import { ThemeProvider, Btn } from "react-native-klistra-ui";

export default function App() {
  return (
    <ThemeProvider mode="dark">
      <Btn text="OK" onPress={() => {}} />
    </ThemeProvider>
  );
}
```

- `mode="light"` — thème clair (défaut), basé sur `lightTheme`
- `mode="dark"` — thème sombre, basé sur `darkTheme`

Basculer dynamiquement :

```tsx
const [mode, setMode] = useState<"light" | "dark">("light");

<ThemeProvider mode={mode}>
  {/* ... */}
</ThemeProvider>
```

Ou suivre le thème système avec `useColorScheme()` :

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

Passer un objet `theme` partiel : seules les clés fournies remplacent celles du mode actif.

```tsx
import { ThemeProvider } from "react-native-klistra-ui";

export default function App() {
  return (
    <ThemeProvider
      mode="light"
      theme={{
        primary: "#0A84FF",
        tertiary: "#63cfbc",
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

Les overrides s’appliquent **par-dessus** le mode : dark mode + ta marque (`primary`, radius, etc.) sans tout redéfinir.

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

| Token               | Type     | Description               |
|---------------------|----------|---------------------------|
| `primary`           | `string` | Couleur primaire          |
| `secondary`         | `string` | Couleur secondaire        |
| `tertiary`          | `string` | Couleur tertiaire         |
| `danger`            | `string` | Erreur / danger           |
| `warning`           | `string` | Avertissement             |
| `success`           | `string` | Succès                    |
| `info`              | `string` | Information               |
| `primaryContrast`   | `string` | Contraste sur `primary`   |
| `secondaryContrast` | `string` | Contraste sur `secondary` |
| `tertiaryContrast`  | `string` | Contraste sur `tertiary`  |
| `dangerContrast`    | `string` | Contraste sur `danger`    |
| `warningContrast`   | `string` | Contraste sur `warning`   |
| `successContrast`   | `string` | Contraste sur `success`   |
| `infoContrast`      | `string` | Contraste sur `info`      |

#### Surfaces & texte

| Token            | Type     | Description      |
|------------------|----------|------------------|
| `bg-body`        | `string` | Fond principal   |
| `bg-secondary`   | `string` | Fond secondaire  |
| `bg-card`        | `string` | Fond carte       |
| `bg-form`        | `string` | Fond des champs  |
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

Les thèmes de base sont aussi exportés (`lightTheme`, `darkTheme`).

### API thème

| Export            | Rôle                                   |
|-------------------|----------------------------------------|
| `ThemeProvider`   | Fournit le thème aux composants        |
| `useTheme()`      | Retourne les tokens du thème actif     |
| `useThemeMode()`  | Retourne `"light"` ou `"dark"`         |
| `lightTheme`      | Thème clair par défaut                 |
| `darkTheme`       | Thème sombre par défaut                |
| `createStyles(v)` | Factory de styles à partir d’un thème  |
| `useStyles()`     | Styles générés à partir du thème actif |
| `ThemeVariables`  | Type TypeScript des tokens             |
| `ThemeMode`       | Type `"light" \| "dark"`               |
| `IconName`        | Union des noms d’icônes valides        |

## Licence

MIT
