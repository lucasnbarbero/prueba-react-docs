---
sidebar_position: 3
---

# 🚀 Inicio

Comience su proyecto

## Instalación

Navegá a la carpeta raíz

```
c:\ cd <nombre_del_proyecto>
```

Instale paquetes mediante **npm** o **yarn** según sus preferencias. Aquí estamos usando el administrador de paquetes `npm`

```
c:\nombre_del_proyecto> npm install --save
```

## Comenzar

Después de la instalación del paquete, puede iniciar su aplicación usando `npm run dev`

```
c:\nombre_del_proyecto> npm run dev
```

Esto iniciará su servidor local en `http://localhost:5173`. Ademñas, su terminal muestra lo siguiente:

```
VITE v5.2.10  ready in 649 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Build & Deploy

Una vez que hayas desarrollado tu aplicación y estés listo para lanzarla al mundo, es hora de construir y desplegar tu proyecto. Sigue estos pasos para llevar tu aplicación desde tu entorno de desarrollo local a un entorno de producción:

### Construir tu Aplicación

Primero, necesitas construir tu aplicación para crear los archivos optimizados que se desplegarán en producción. Ejecuta el siguiente comando en tu terminal:

```bash
npm run build
```

Este comando generará una carpeta build que contiene los archivos estáticos optimizados listos para ser desplegados.
