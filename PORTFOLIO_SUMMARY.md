# Portfolio Professionnel - Archange Yatte

## Résumé

J'ai créé un portfolio professionnel complet pour Archange Yatte en utilisant Next.js (App Router) avec TypeScript, optimisé pour le déploiement sur Vercel. Le portfolio comprend toutes les fonctionnalités demandées avec un design moderne et responsive.

## Fonctionnalités Implémentées

### Structure du Projet
```
/portfolio
├── /src
│   ├── /app (Pages de l'application)
│   ├── /components (Composants réutilisables)
│   └── /styles
├── /public
│   └── /media (Contient le CV)
├── /components (Composants réutilisables)
└── ...
```

### Pages et Sections

1. **Page d'Accueil (Hero Section)**
   - Nom : Archange Yatte
   - Titre : "Développeur Full-Stack & Analyste Cybersécurité"
   - Brève description sur la cybersécurité
   - Bouton "Télécharger mon CV" pointant vers `/media/CV_YATTE_ARCHANGE.pdf`
   - Icônes de réseaux sociaux (LinkedIn, GitHub, Twitter)

2. **Section À Propos**
   - Paragraphe sur le parcours professionnel
   - Compétences clés : Next.js, Node.js, Python, Wireshark, Nmap, Linux, Cybersécurité
   - Langues : Français (natif), Anglais (courant)

3. **Section Projets**
   - Grille de cartes pour 4 projets :
     * CYBERGRAM : Plateforme de veille automatisée en cybersécurité
     * HackPen : Plateforme de test de pénétration sous Linux
     * WSAS : Simulateur d'attaques web (XSS, CSRF)
     * Plateforme pour Artisans Ivoiriens : Sécurisation complète
   - Chaque carte inclut : titre, description, technologies, lien GitHub, placeholder image

4. **Section Compétences**
   - Visualisation avec barres de progression pour :
     * Développement : Next.js, Node.js, Python, PHP, MySQL
     * Cybersécurité : Wireshark, Nmap, Linux, Sécurité Web
     * Outils : Git, Docker, Figma

5. **Section Contact**
   - Formulaire simple (nom, email, message)
   - Coordonnées : email et téléphone

### Design et UI/UX

- **Technologie** : Tailwind CSS pour un design moderne et responsive
- **Palette de couleurs** : Noir/Sombre avec accents bleu électrique/vert
- **Animations** : Framer Motion pour des transitions fluides entre les sections
- **Police** : Inter (moderne et lisible)
- **Responsive** : Adapté pour mobile, tablette et desktop

### Fonctionnalités Techniques

- **Full Static** : Prêt pour déploiement simple sur Vercel
- **SEO Optimisé** : Utilisation de `next/head` pour balises méta
- **Sitemap** : Génération automatique avec `next-sitemap`
- **Liens externes** : Ouverture dans un nouvel onglet

### Composants Réutilisables

1. `Button.tsx` : Boutons stylisés avec variantes
2. `ProjectCard.tsx` : Cartes de projets avec animations
3. `SkillBar.tsx` : Barres de compétences avec niveaux
4. `SocialIcon.tsx` : Icônes de réseaux sociaux

## Technologies Utilisées

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : React Icons
- **Déploiement** : Vercel

## Fichiers de Configuration

- `vercel.json` : Configuration pour headers et redirections
- `next-sitemap.config.js` : Configuration de génération de sitemap
- `.github/workflows/deploy.yml` : Workflow CI/CD pour déploiement automatique
- `tsconfig.json` : Configuration TypeScript avec alias de chemin

## Instructions d'Utilisation

### Installation
```bash
npm install
```

### Développement Local
```bash
npm run dev
```
Accessible à : http://localhost:3000

### Construction du Projet
```bash
npm run build
```

### Déploiement sur Vercel

1. Connectez-vous à Vercel
2. Créez un nouveau projet lié à ce dépôt
3. Configurez avec :
   - Framework Preset : Next.js
   - Build Command : `npm run build`
   - Output Directory : `.next`
4. Déployez !

## Structure des Fichiers Principaux

```
src/
├── app/
│   ├── layout.tsx (Configuration globale, métadonnées)
│   └── page.tsx (Page principale avec toutes les sections)
├── components/
│   ├── Button.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBar.tsx
│   └── SocialIcon.tsx
└── app/globals.css (Styles globaux personnalisés)
```

## Points Forts

1. **Code Organisé** : Structure claire avec composants réutilisables
2. **Responsive Design** : Adapté à tous les écrans
3. **Performant** : Site statique optimisé pour un chargement rapide
4. **Maintenable** : Architecture modulaire facilitant les mises à jour
5. **Prêt pour Production** : Configuration complète pour déploiement Vercel
6. **Accessibilité** : Bonnes pratiques d'accessibilité web

## Remarques

- Le CV est correctement placé dans `/public/media/CV_YATTE_ARCHANGE.pdf`
- Tous les liens externes s'ouvrent dans un nouvel onglet
- Le design respecte l'esthétique "cybersécurité" avec un thème sombre
- Les animations sont légères et ne nuisent pas à l'expérience utilisateur