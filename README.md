# Hiflow Driver App

Bienvenue dans le dépôt de **Hiflow Driver App**, une application mobile développée avec React Native et Expo pour la gestion des missions de convoyage automobile.

## 🚀 À propos du projet

L'application permet aux chauffeurs de visualiser les missions de convoyage disponible, d'en accepter de nouvelles, et de gérer leurs missions en cours jusqu'à la livraison. 

L'architecture est construite pour être claire, modulaire et hautement typée avec TypeScript.

### Pile technique (Tech Stack)
- **Framework** : React Native / [Expo](https://expo.dev/)
- **Langage** : TypeScript
- **Navigation** : React Navigation v7 (Bottom Tabs + Native Stack)
- **Validation de données** : Zod (Single Source of Truth)
- **Gestion d'état** : API Context native de React (`MissionsContext`)
- **UI/UX** : React Native StyleSheet, Icons via `lucide-react-native`
- **Tests** : Jest, React Native Testing Library
- **Monitoring & Error Tracking** : Sentry

## 📁 Structure du projet

La séparation des responsabilités est primordiale dans ce projet. Voici l'organisation du dossier `src/` :

```text
frontend/src/
├── components/      # Composants UI réutilisables (ex: MissionCard, StatusBadge)
├── context/         # Gestion d'état global avec React Context (MissionsContext)
├── data/            # Données locales (mocks) pour le développement (missions.ts)
├── navigation/      # Configuration du routage et des onglets de navigation
├── schemas/         # Validateurs Zod (mission.schema.ts) garantissant la sécurité des données
├── screens/         # Les vues pleines pages de l'application (List, Detail, MyMissions)
├── theme/           # Design System centralisé (couleurs, espacements, typographie)
└── types/           # Définitions des types TypeScript déduits ou manuels
```

## 🛠️ Installation et Démarrage

### Pré-requis
- [Node.js](https://nodejs.org/) (version LTS recommandée)
- `npm` ou `yarn`

### 1. Installation des dépendances
Placez-vous dans le dossier `frontend` et installez les paquets :
```bash
cd frontend
npm install
```

### 2. Lancer l'application en mode développement
Expo est pré-configuré. Il vous suffit de lancer la commande de démarrage :
```bash
npm start
# ou npx expo start
```
Vous pouvez ensuite scanner le QR Code via l'application **Expo Go** (sur iOS/Android) ou utiliser un simulateur local en appuyant sur `i` ou `a` dans le terminal.

## 🧪 Tests Unitaires et Composants

Le projet embarque une suite de tests poussée combinée avec des validations Zod.

### Lancer tous les tests
```bash
npm run test
```

### Lancer les tests en mode "Watch" (pendant le développement)
```bash
npm run test -- --watch
```

### Ce qui est testé à ce jour :
- **Logique d'état** (`MissionsContext`) : On s'assure que l'acceptation d'une mission modifie correctement la liste et le statut de la mission.
- **Conformité des données** (`mission.schema`) : Zod vérifie que chaque objet métier entrant a bien la bonne forme (tests sur les dates, la validité du kilométrage, des identifiants et des statuts).
- **Interface Utilisateur** (`StatusBadge`) : Tests de "Component match snapshot" pour garantir qu'aucune mise à jour involontaire ne vienne casser le design des statuts (Disponible, En cours, Livrée).

## 📝 Bonnes Pratiques Adoptées
- **Architecture Single Source of Truth** : Les types TypeScript (`Mission`) sont automatiquement déduits des schémas de validation Zod via `z.infer`. Une modification du modèle de données est instantanément propagée partout dans l'application.
- **Design System** : Toutes les couleurs, rayons (radius) et polices sont appelées depuis un dictionnaire de tokens centralisé dans `src/theme/index.ts`. On évite le code "en dur".
- **Composants isolés** : La mécanique de séparation des composants et des écrans permet de faire monter l'application en charge demain (intégration API, etc.) sans friction.
- **Monitoring Proactif** : Intégration de Sentry pour capturer automatiquement les crashs et les erreurs en production, garantissant une grande maintenabilité et réactivité.
