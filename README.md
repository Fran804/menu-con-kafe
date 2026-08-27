# Con KaFe · Menú digital

Menú digital público para **Con KaFe** (panadería & café artesanal), pensado
para compartirse por WhatsApp, Instagram, Facebook, TikTok, código QR o enlace
directo.

Aplicación **frontend estática** (sin base de datos ni backend en esta versión),
con una arquitectura preparada para conectarse en el futuro a **Supabase** y ser
controlada desde el POS, sin necesidad de reescribir los componentes visuales.

---

## Tecnologías

- **Angular 22** (standalone components + Signals)
- **TypeScript**
- **SCSS** con variables de marca
- HTML semántico, diseño **responsive** y **mobile first**
- Sin librerías de UI externas (interfaz propia)

---

## Requisitos

- **Node.js 20+** (probado con Node 22)
- **npm 10+**

## Instalación

```bash
npm install
```

## Ejecutar en local

```bash
npm start
```

Abre `http://localhost:4200/`. El servidor recarga automáticamente al guardar.

## Compilar para producción

```bash
npm run build
```

El resultado queda en `dist/menu-con-kafe/browser/`.

---

## Cómo modificar los productos

Todo el contenido del menú (productos, precios, categorías, disponibilidad y
datos de marca) vive en **un solo archivo**:

```
src/app/data/local-menu.data.ts
```

- **Cambiar un precio:** edita el campo `price` (número, sin símbolo). La interfaz
  se actualiza sola.
- **Agotar un producto:** pon `available: false`. Aparecerá como **AGOTADO** sin
  desaparecer del menú.
- **Agregar un producto:** copia un objeto de `PRODUCTS`, dale un `id` único y su
  `categoryId`.
- **Redes sociales:** edita `SITE_CONFIG.social` (Instagram, Facebook, TikTok y el
  número de WhatsApp en formato internacional, ej. `5215512345678`).

> Los precios **nunca** se escriben en las plantillas HTML: siempre provienen de
> este archivo de datos.

## Cómo agregar imágenes

1. Guarda la foto en `public/images/products/` (formato `.webp`, ~1200×900 px).
2. Añade `imageUrl` al producto en `local-menu.data.ts`:

   ```ts
   imageUrl: 'images/products/pan-zanahoria.webp',
   ```

Si un producto no tiene imagen, se muestra un placeholder decorativo neutro.

---

## Estructura del proyecto

```
src/app/
├── core/
│   ├── models/            # Product, Category, Menu, SiteConfig
│   └── services/
│       ├── menu-data-source.ts   # Contrato + token de la fuente de datos
│       └── menu.service.ts       # Estado del menú (Signals)
├── data/
│   └── local-menu.data.ts        # ← ÚNICA fuente de contenido (editar aquí)
├── features/menu/
│   ├── menu-page/          # Orquesta toda la página
│   ├── menu-header/        # Encabezado de marca
│   ├── category-navigation/# Navegación de categorías
│   ├── product-list/       # Sección por categoría
│   ├── product-item/       # Fila de producto (táctil)
│   ├── product-modal/      # Detalle en modal / bottom sheet
│   └── menu-footer/        # Pie con redes sociales
├── shared/
│   └── pipes/price.pipe.ts # Formato de precios ($)
├── app.ts
└── app.config.ts           # Aquí se elige la fuente de datos
```

---

## Deployment (Vercel)

El proyecto se despliega como sitio estático. Incluye `vercel.json` con:

- Build: `npm run build`
- Output: `dist/menu-con-kafe/browser`
- Rewrites al `index.html` (SPA)

Basta con importar el repositorio en Vercel; detecta la configuración
automáticamente.

---

## Futura integración con Supabase / POS

La app consume el menú a través de `MenuService`, que a su vez depende del token
`MENU_DATA_SOURCE`. Hoy ese token usa `LocalMenuDataSource` (datos en código).

Para conectar con Supabase en el futuro, solo hará falta:

1. Crear `SupabaseMenuDataSource` que implemente la interfaz `MenuDataSource`.
2. Cambiar el provider en `src/app/app.config.ts`:

   ```ts
   { provide: MENU_DATA_SOURCE, useClass: SupabaseMenuDataSource }
   ```

Los componentes visuales **no requieren ningún cambio**. Así, el POS podrá
controlar nombre, precio, descripción, categoría, imagen, disponibilidad,
destacado y orden desde Supabase.
