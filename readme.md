# Proyecto de Aplicación con Vite

Este es un proyecto base que utiliza [Vite](https://vitejs.dev/) como herramienta de construcción rápida y eficiente para aplicaciones web modernas.

## Características

- 🚀 **Rendimiento rápido**: Vite utiliza una arquitectura de desarrollo basada en ES Modules.
- ⚡ **Desarrollo en tiempo real**: Cambios en el código se reflejan inmediatamente gracias al HMR (Hot Module Replacement).
- 📦 **Optimización de producción**: Construcción rápida y optimizada para la producción.

---

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

---

## Uso

### Entorno de desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Accede a la aplicación en tu navegador en [http://localhost:5173](http://localhost:5173).

### Construcción para producción

Genera los archivos optimizados para producción:

```bash
npm run build
# o
yarn build
```

Los archivos generados estarán en el directorio `dist`.

### Vista previa de producción

Ejecuta un servidor para previsualizar la versión de producción:

```bash
npm run preview
# o
yarn preview
```