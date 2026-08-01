# react-native-klistra-ui

Librairie de composants React Native avec thème light / dark personnalisable.

## Installation

```bash
npm install react-native-klistra-ui
```

Peer / dépendances attendues : `react`, `react-native`, `react-native-reanimated`, `@expo/vector-icons`.

## Utilisation des composants

Importer les composants et les utiliser directement. Sans `ThemeProvider`, le thème **light** s’applique par défaut.

```tsx
import { Btn, Badge, Icon, IconBadge, Progress } from "react-native-klistra-ui";

export default function Screen() {
  return (
    <>
      <Btn
        text="Valider"
        color="#fff"
        background="#1e1e1e"
        onPress={() => {}}
      />

      <Btn
        small
        text="Ajouter"
        color="#fff"
        background="#0A84FF"
        icon="add"
        onPress={async () => {}}
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

## Composants

### `Btn`

Bouton tactile avec gestion automatique d’un état de chargement. Pendant l’exécution de `onPress` (y compris si la fonction est async), un `ActivityIndicator` remplace le contenu et le bouton est désactivé.

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
  disabled={false}
  onPress={() => {}}
/>
```

| Prop         | Type                                              | Défaut  | Description                                      |
|--------------|---------------------------------------------------|---------|--------------------------------------------------|
| `color`      | `string`                                          | —       | Couleur du texte, de l’icône et du loader        |
| `background` | `string`                                          | —       | Couleur de fond du bouton                        |
| `onPress`    | `(event) => void \| Promise<void>`                | —       | Callback au tap (sync ou async)                  |
| `text`       | `string`                                          | —       | Libellé affiché (uppercase via les styles)       |
| `icon`       | `string`                                          | —       | Nom d’icône (voir `Icon`)                        |
| `small`      | `boolean`                                         | `false` | Variante compacte                                |
| `disabled`   | `boolean`                                         | `false` | Désactive les interactions                       |

---

### `Badge`

Petit label coloré. Le fond est dérivé de `color` avec une transparence (`color + '1A'`). Peut afficher un texte simple, ou des enfants (icône + texte, etc.). Avec `floating`, le badge se positionne en absolute (coin haut-droit).

```tsx
<Badge text="Nouveau" color="#0A84FF" />

<Badge text={3} color="#FF3B30" floating />

<Badge color="#0A84FF">
  <Icon name="alert" size={12} color="#0A84FF" />
  <Text>Info</Text>
</Badge>
```

| Prop       | Type               | Défaut  | Description                                         |
|------------|--------------------|---------|-----------------------------------------------------|
| `text`     | `string \| number` | —       | Contenu texte (ignoré si `children` est fourni)     |
| `color`    | `string`           | —       | Couleur du texte et base du fond semi-transparent   |
| `floating` | `boolean`          | `false` | Position absolute (haut-droite)                     |
| `style`    | `Object`           | —       | Styles additionnels                                 |
| `children` | `ReactNode`        | —       | Contenu custom (remplace le rendu texte)            |

---

### `Icon`

Icône unifiée basée sur `@expo/vector-icons`. On passe un nom logique (`"add"`, `"settings"`, …) ; le composant mappe vers la bonne famille d’icônes. Un nom inconnu affiche un point (`ellipse`).

```tsx
<Icon name="settings" size={24} color="#1e1e1e" />
<Icon name="add" size={16} color="#0A84FF" />
```

| Prop    | Type                     | Défaut | Description                    |
|---------|--------------------------|--------|--------------------------------|
| `name`  | `string`                 | —      | Identifiant logique de l’icône |
| `size`  | `number`                 | —      | Taille en pixels               |
| `color` | `string`                 | —      | Couleur de l’icône             |
| `style` | `StyleProp<TextStyle>`   | —      | Style additionnel              |

**Noms disponibles :** `add`, `alert`, `brand`, `calendar`, `car`, `close`, `driver`, `exit`, `left`, `menu`, `minus`, `money`, `rankings`, `return`, `right`, `stats`, `building`, `front-wing`, `rear-wing`, `suspension`, `flanks`, `flat-bottom`, `disc`, `arrow-up`, `arrow-down`, `question-circle`, `caret-down-sharp`, `settings`, `wrench`, `dashboard`, `wind`, `chassis`.

---

### `IconBadge`

Icône affichée dans un conteneur circulaire coloré (avatar / pastille). Optionnellement, une bordure peut être ajoutée via `borderColor`.

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

Barre de progression animée (Reanimated). La largeur remplie correspond à `step / nbSteps`. Sans `width`, la barre prend la largeur de l’écran moins le `padding` du thème.

```tsx
<Progress
  step={2}
  nbSteps={5}
  color="#0A84FF"
  backgroundColor="#E5E5E5"
/>

<Progress step={1} nbSteps={3} width={200} color="#34C759" />
```

| Prop              | Type     | Défaut                         | Description                                      |
|-------------------|----------|--------------------------------|--------------------------------------------------|
| `step`            | `number` | —                              | Étape courante (clampée entre 0 et `nbSteps`)    |
| `nbSteps`         | `number` | —                              | Nombre total d’étapes                            |
| `color`           | `string` | —                              | Couleur de la barre remplie                      |
| `backgroundColor` | `string` | —                              | Couleur du fond de la piste                      |
| `width`           | `number` | largeur écran − padding thème  | Largeur totale de la barre                       |

## Personnalisation du thème

Envelopper l’application (ou une partie) avec `ThemeProvider`.

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

- `mode="light"` — thème clair (défaut)
- `mode="dark"` — thème sombre

### Overrides de tokens

Passer un objet `theme` partiel : seules les clés fournies remplacent celles du mode actif.

```tsx
import { ThemeProvider } from "react-native-klistra-ui";

export default function App() {
  return (
    <ThemeProvider
      mode="light"
      theme={{
        "text-body": "#0A84FF",
        "bg-body": "#F0F4FF",
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
    </View>
  );
}
```

### Tokens disponibles

| Token                        | Type     | Description                |
|------------------------------|----------|----------------------------|
| `bg-body`                    | `string` | Fond principal             |
| `bg-secondary`               | `string` | Fond secondaire            |
| `bg-card`                    | `string` | Fond carte                 |
| `text-body`                  | `string` | Texte principal            |
| `text-secondary`             | `string` | Texte secondaire           |
| `text-disabled`              | `string` | Texte désactivé            |
| `border-color`               | `string` | Bordure                    |
| `border-color-warning`       | `string` | Bordure warning            |
| `background-color-warning`   | `string` | Fond warning               |
| `text-warning`               | `string` | Texte warning              |
| `gap`                        | `number` | Espacement                 |
| `padding`                    | `number` | Padding                    |
| `border-radius`              | `number` | Radius général             |
| `component-border-radius`    | `number` | Radius des composants      |

Les thèmes de base sont aussi exportés (`lightTheme`, `darkTheme`) si tu veux t’en servir comme référence.

## API thème

| Export           | Rôle                                      |
|------------------|-------------------------------------------|
| `ThemeProvider`  | Fournit le thème aux composants           |
| `useTheme()`     | Retourne les tokens du thème actif        |
| `useThemeMode()` | Retourne `"light"` ou `"dark"`            |
| `lightTheme`     | Objet thème clair par défaut              |
| `darkTheme`      | Objet thème sombre par défaut             |
| `useStyles()`    | Styles générés à partir du thème actif    |

## Licence

MIT
