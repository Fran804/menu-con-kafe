# Imágenes de productos

Coloca aquí las fotografías de los productos, preferentemente en formato
**`.webp`** (ligero y de buena calidad) y con un tamaño aproximado de
**1200×900 px** (relación 4:3).

## Cómo enlazar una imagen

1. Guarda el archivo en esta carpeta, por ejemplo:
   `public/images/products/pan-zanahoria.webp`

2. En `src/app/data/local-menu.data.ts`, añade `imageUrl` al producto:

   ```ts
   {
     id: 'pan-zanahoria',
     name: 'Pan de zanahoria',
     imageUrl: 'images/products/pan-zanahoria.webp',
     // ...
   }
   ```

Si un producto no tiene `imageUrl`, la app muestra automáticamente un
placeholder decorativo neutro (no se rompe nada).

## Nombres sugeridos

- pan-zanahoria.webp
- croissant.webp
- chocolatin.webp
- rol-canela.webp
- rol-canela-nuez.webp
- tiramisu.webp
- rol-salado.webp
- tarta-frutos-rojos.webp
- hojaldras.webp
- bolitas-queso.webp
