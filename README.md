# Le Nexus Connecté 🌐

Module d'interaction dynamique développé pour la **Nuit de l'Info**.
Ce projet est une application web Next.js présentant un "Portail d'Intention" immersif et une "Zone de Confirmation Personnalisée" sur le thème Cyber/Data.

## 🚀 Fonctionnalités

- **Portail d'Intention (Formulaire)** :
  - Interface dynamique qui s'adapte selon la mission choisie (Contact, Don, Guilde, Info).
  - Champs conditionnels (ex: montant pour les dons, message pour le contact).
  - Validation des entrées.

- **Écho de Gratitude (Confirmation)** :
  - Message personnalisé basé sur le nom de l'utilisateur et sa mission.
  - Intégration dynamique de l'année en cours.
  - Design immersif avec animations.

- **Design & Tech** :
  - **Next.js 14** (App Router).
  - **Tailwind CSS** pour le styling (Thème Cyber: Cyan/Purple/Dark).
  - **Framer Motion** pour les animations fluides.
  - **Export Statique** configuré pour GitHub Pages.

## 🛠️ Installation & Démarrage

1.  **Cloner le dépôt** :
    ```bash
    git clone git@github.com:Nuit-de-l-info-1-0-ponible/nexus.git
    cd nexus
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build & Déploiement (GitHub Pages)

Le projet est configuré pour un **export statique** (`output: "export"`) compatible avec GitHub Pages.

1.  **Générer le build** :
    ```bash
    npm run build
    ```
    Cela va créer un dossier `out` à la racine du projet.

2.  **Configuration GitHub Pages** :
    - Le fichier `next.config.mjs` contient `basePath: "/nexus"`. Cela signifie que l'application s'attend à être hébergée sur `https://<votre-user>.github.io/nexus/`.
    - Si vous déployez sur un autre chemin ou à la racine, modifiez `basePath` dans `next.config.mjs`.

3.  **Note sur l'API** :
    - Pour permettre l'hébergement statique, l'API de sauvegarde (`/api/nexus`) a été désactivée.
    - Le formulaire fonctionne en **Mode Simulation** : les interactions sont simulées côté client (logs dans la console) pour démontrer l'expérience utilisateur sans backend.

## 🎨 Structure du Projet

- `app/` : Pages et Layout (Next.js App Router).
- `components/nexus/` : Composants React spécifiques (Formulaire, Confirmation).
- `public/assets/` : Ressources statiques (Images, SVG).
- `next.config.mjs` : Configuration du build et du déploiement.

---
*Développé par l'équipe Nuit de l'Info 1.0 Ponible* 🦎
