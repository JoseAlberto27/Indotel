# José Alberto Ramírez - Landing Page STEM INDOTEL

Landing page moderna para presentar la participación de José Alberto Ramírez en el Concurso STEM de INDOTEL.

## Características

- Diseño oscuro, futurista y responsive.
- Secciones completas: inicio, sobre mí, visión, habilidades, impacto, galería, contacto y footer.
- Animaciones con Framer Motion.
- Estilos con Tailwind CSS.
- Iconografía con React Icons.
- Hook local `useInView` para animaciones al entrar en pantalla.

## Instalación

```bash
npm install
npm run dev
```

La app queda disponible en la URL indicada por Vite, normalmente `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  components/
    Hero.jsx
    About.jsx
    Vision.jsx
    Skills.jsx
    Impact.jsx
    Gallery.jsx
    Contact.jsx
    Footer.jsx
  hooks/
    useInView.js
  App.jsx
  index.css
  main.jsx
```

## Personalización

- Actualiza el correo, usuario de GitHub y enlaces sociales en `src/components/Contact.jsx`.
- Reemplaza el placeholder del video en `src/components/Hero.jsx`.
- Cambia los proyectos de la galería en `src/components/Gallery.jsx`.
- Ajusta textos personales en `src/components/About.jsx`, `src/components/Vision.jsx` y `src/components/Skills.jsx`.
