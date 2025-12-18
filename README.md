# Portfolio Professionnel d'Archange Yatte

Portfolio professionnel développé avec Next.js (App Router) et TypeScript, optimisé pour Vercel.

## Structure du Projet

```
/portfolio
├── /src
│   ├── /app
│   ├── /components
│   └── /styles
├── /public
│   └── /media
└── ...
```

## Fonctionnalités

- **Design moderne** avec Tailwind CSS
- **Animations fluides** avec Framer Motion
- **Responsive** pour tous les appareils
- **Optimisé pour le SEO**
- **Génération automatique de sitemap**
- **Déploiement facile sur Vercel**

## Installation

Pour installer les dépendances :

```bash
npm install
```

## Développement Local

Pour lancer le projet en local :

```bash
npm run dev
```

Le site sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

## Déploiement

### Déploiement sur Vercel

1. Connectez-vous à votre compte Vercel
2. Créez un nouveau projet
3. Liez-le à votre dépôt GitHub contenant ce code
4. Configurez les paramètres de build :
   - Framework Preset : Next.js
   - Build Command : `npm run build`
   - Output Directory : `.next`
5. Déployez !

### Déploiement Manuel

Pour construire le projet :

```bash
npm run build
```

Le site statique sera généré dans le dossier `.next/static`.

## Composants Réutilisables

- `Button.tsx` : Boutons stylisés
- `ProjectCard.tsx` : Cartes de projets
- `SkillBar.tsx` : Barres de compétences
- `SocialIcon.tsx` : Icônes de réseaux sociaux

## Auteur

**Archange Yatte** - Développeur Full-Stack & Analyste Cybersécurité

## Technologies Utilisées

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)