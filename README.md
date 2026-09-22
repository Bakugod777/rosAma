# Flores Amarillas

Un pequeño ritual digital en español: escribes tu nombre, respondes tres preguntas con calma y al final nace una flor amarilla con un mensaje personal.

Hecho con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**.

## Requisitos

- Node.js 20+
- [pnpm](https://pnpm.io/) 10+

## Cómo correrlo

```bash
pnpm install
pnpm dev
```

Abre [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Scripts

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo (puerto `43123`) |
| `pnpm build` | Build de producción |
| `pnpm start` | Servir el build |

## Estructura

```text
app/                  # App Router de Next.js
  page.tsx            # Ritual completo (bienvenida → preguntas → flor)
  layout.tsx          # Metadata e idioma
  globals.css         # Estilos y animaciones
components/
  yellow-flower.tsx   # Flor SVG animada
  ui/button.tsx       # Primitivo shadcn/ui
lib/
  ritual.ts           # Preguntas y textos del ritual
  utils.ts            # Utilidad `cn`
public/               # Iconos e imagen botánica
```

## Publicar en GitHub

1. Crea un repositorio vacío en GitHub (sin README si ya tienes este).
2. En tu máquina, dentro de esta carpeta:

```bash
git remote add github https://github.com/TU_USUARIO/flores-amarillas.git
git push -u github main
```

Si ya tienes `origin` apuntando a otro remoto, usa el nombre `github` como arriba o reemplaza `origin`:

```bash
git remote set-url origin https://github.com/TU_USUARIO/flores-amarillas.git
git push -u origin main
```

## Desplegar en GitHub Pages

El workflow [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) construye el sitio estático y lo publica en Pages.

1. En el repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**
2. Haz push a `main` (o corre el workflow manualmente en la pestaña Actions)
3. La URL queda en: `https://bakugod777.github.io/rosAma/`

## Desplegar en Vercel

También puedes importar el repo en [Vercel](https://vercel.com). El comando de build es `pnpm build`.

## Licencia

Uso personal / libre para adaptar. Si publicas una versión, deja un crédito al ritual original si te nace.
