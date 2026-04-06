# 🚀 Mi Portfolio

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Este es mi portafolio profesional personal, diseñado bajo una estética **minimalista/cyberpunk** y optimizado para ofrecer la mejor experiencia de usuario (UX) y rendimiento web.

> **🌐 Demo en vivo:** [Portfolio](https://andresmendezgutierrez.github.io/portfolio/)

---

## ✨ Características Técnicas

- **Core:** Construido con **Astro 5.0+** utilizando arquitectura de islas para un JS mínimo en el cliente.
- **Estilos:** **Tailwind CSS 4.2** con variables dinámicas y soporte nativo para Dark Mode.
- **Formulario Inteligente:** Sistema de contacto con validación en tiempo real y protección **Google reCAPTCHA v3**.
- **Notificaciones:** Sistema de Toasts personalizado integrado mediante un Global Toast Manager.
- **Optimización de Fuentes:** Uso de formatos **WOFF2** con `font-display: swap` para eliminar el CLS (Cumulative Layout Shift).
- **Rendimiento:** Puntuación de **100/100 en Lighthouse** en Performance, Accesibilidad y SEO.

---

## 🛠️ Stack Tecnológico

| Herramienta             | Uso                                                               |
| :---------------------- | :---------------------------------------------------------------- |
| **Astro**               | Framework principal y generación de sitio estático (SSG).         |
| **TypeScript**          | Tipado robusto para toda la lógica del cliente y servicios.       |
| **Tailwind CSS**        | Diseño responsivo y animaciones aceleradas por GPU.               |
| **Lucide/Custom Icons** | Iconografía vectorial ligera.                                     |
| **Email Service**       | Integración personalizada para envío de correos desde el cliente. |

---

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── assets/        # Imágenes optimizadas (WebP/SVG)
│   └── fonts/         # Tipografías locales en formato WOFF2
├── src/
│   ├── components/    # Componentes reutilizables (Cards, Form, Toast)
│   ├── layouts/       # Estructuras base de página
│   ├── pages/         # Rutas e internacionalización (i18n)
│   └── services/      # Lógica de reCAPTCHA y servicios de API
└── .env               # Variables de entorno (ver sección de Configuración)
```

## Comandos Disponibles

```
npm run dev // Inicia el servidor de desarrollo en localhost:4321.
npm run build // Compila el proyecto para producción en ./dist/.
npm run preview // Previsualiza localmente la versión de producción.
npm run astro -- --help // Muestra la ayuda de la CLI de Astro.
```

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usar el código para tu propio portafolio.

## 📩 Contacto

Diseñado y desarrollado por Andrés Méndez.

LinkedIn: linkedin.com/in/andresmendezgutierrez

GitHub: @AndresMendezGutierrez
