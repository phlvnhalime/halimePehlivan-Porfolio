# Halime Pehlivan - Portfolio Website

A modern, responsive portfolio website built with Vue 3, TypeScript, and Vite.

## Features

- 🎨 **Modern Design** - Clean, professional, and visually appealing design
- 📱 **Fully Responsive** - Works seamlessly on all devices (desktop, tablet, mobile)
- ⚡ **Fast & Lightweight** - Built with Vue 3 and Vite for optimal performance
- 🌈 **Beautiful Animations** - Smooth transitions and hover effects
- 📄 **Portfolio Sections**:
  - Hero section with call-to-action
  - About section
  - Skills showcase
  - Featured projects
  - Contact information
  - Social media links

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management
- **CSS3** - Modern styling with animations

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Customization

You can easily customize your portfolio by editing the following files:

- **Personal Information**: Edit `src/views/HomeView.vue` and update the `personalInfo`, `skills`, and `projects` objects
- **Styling**: Modify CSS in `src/views/HomeView.vue`, `src/App.vue`, and `src/assets/`
- **Navigation**: Update navigation links in `src/App.vue`
- **About Page**: Edit `src/views/AboutView.vue`

## Project Structure

```
src/
├── assets/          # CSS and static assets
├── components/      # Vue components
├── router/          # Vue Router configuration
├── stores/          # Pinia stores
├── views/           # Page components
│   ├── HomeView.vue # Main portfolio page
│   └── AboutView.vue # About page
└── App.vue          # Root component
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## License

This project is open source and available under the [MIT License](LICENSE).
