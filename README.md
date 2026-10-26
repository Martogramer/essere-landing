# ESSERE — Sitio público (landing)

Primera versión del sitio público de ESSERE: landing institucional + maqueta
del modal de acceso para profesionales.

Este proyecto nace del Vercel Platforms Starter Kit, pero se le quitó
deliberadamente todo lo específico de multi-tenancy (proxy de subdominios,
Redis, panel de admin de tenants), que no aplica al caso de ESSERE —un solo
centro, no una plataforma que hospeda múltiples organizaciones—. Lo que se
conservó: configuración base de Next.js, Tailwind 4 y los primitivos de
shadcn/ui (`button`, `dialog`, `input`, `label`, `card`).

## Stack

- Next.js 16 (App Router) + TypeScript + React 19
- Tailwind CSS 4
- shadcn/ui (estilo "new-york")

## Cómo correrlo en local
 
```bash
npm install
npm run dev
```

Abrí http://localhost:3000.

## Qué incluye esta versión

- `app/page.tsx` — landing: hero, propuesta, disciplinas, CTA, footer.
- `components/professional-login-dialog.tsx` — modal "Acceso profesional".
  **Es solo interfaz**: el formulario no llama a ningún backend todavía. Eso
  se conecta cuando definamos la estrategia de autenticación del portal
  (ver roadmap del proyecto).
- Paleta de marca en `app/globals.css`, tomada directamente de los archivos
  de logo provistos (no inventada):
  - Celeste `#25A9E0` (isotipo) — color primario.
  - Naranja `#FF8B3D` (isotipo) — acento de alto contraste.
  - Violeta `#866BA9` (wordmark) — acento secundario.
  - Celeste `#5C96BA` (wordmark) — variante para texto sobre fondo claro.

## Qué queda deliberadamente afuera

Todo lo que no sea el sitio público: portal de profesionales, historia
clínica, gestión de espacios e integración con Google Calendar. Esas áreas
se diseñan e implementan por separado, según el MVP técnico acordado.

## Assets de marca

`public/essere-isotipo.png` y `public/essere-wordmark.svg` son los archivos
de logo tal como fueron provistos. `public/favicon.ico` se generó a partir
del isotipo.
