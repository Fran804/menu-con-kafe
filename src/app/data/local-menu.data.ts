import { Injectable } from '@angular/core';
import { Category } from '../core/models/category.model';
import { Menu } from '../core/models/menu.model';
import { Product } from '../core/models/product.model';
import { SiteConfig } from '../core/models/site-config.model';
import { MenuDataSource } from '../core/services/menu-data-source';

/* ===========================================================================
   FUENTE DE DATOS LOCAL DE CON KAFE
   ---------------------------------------------------------------------------
   Este es el ÚNICO lugar donde se editan productos, precios y configuración.
   Cambiar un precio aquí actualiza automáticamente toda la interfaz.

   ⚠️ Los precios marcados con // TODO: confirmar son provisionales.
      Solo están confirmados los precios sin esa etiqueta.
   =========================================================================== */

/** Configuración de marca y redes sociales. */
const SITE_CONFIG: SiteConfig = {
  name: 'Con KaFe',
  tagline: 'Panadería & Café',
  social: {
    instagram: 'https://www.instagram.com/con.kafe/',
    facebook: 'https://www.facebook.com/conkafe.cafeteria',
    tiktok: 'https://www.tiktok.com/@con.kafe',
    whatsapp: '9992231744',
  },
};

/** Categorías del menú (ordenadas). */
const CATEGORIES: Category[] = [
  { id: 'bebidas',          name: 'Bebidas',           order: 1 },
  { id: 'panes-sandwiches', name: 'Panes y Sandwiches', order: 2 },
  { id: 'extras',           name: 'Extras',             order: 3 },
];

/** Productos del menú. El precio va como número; la UI le añade el símbolo. */
const PRODUCTS: Product[] = [

  // ---------------------- BEBIDAS ----------------------
  {
    id: 'americano-caliente',
    name: 'Americano',
    description: 'Espresso diluido con agua caliente. Rellenable para consumo en el lugar (por persona).',
    price: 55,
    categoryId: 'bebidas',
    available: true,
    order: 1,
  },
  {
    id: 'capuchino-caliente',
    name: 'Capuchino',
    description: 'Espresso con leche vaporizada y espuma cremosa.',
    price: 50,
    categoryId: 'bebidas',
    available: true,
    order: 2,
  },
  {
    id: 'moka-caliente',
    name: 'Moka',
    description: 'Espresso con chocolate y leche vaporizada.',
    price: 55,
    categoryId: 'bebidas',
    available: true,
    order: 3,
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso suave con abundante leche vaporizada.',
    price: 60,
    categoryId: 'bebidas',
    available: true,
    order: 4,
  },
  {
    id: 'americano-frio',
    name: 'Americano frío',
    description: 'Espresso con agua fría y hielo.',
    price: 60,
    categoryId: 'bebidas',
    available: true,
    order: 5,
  },
  {
    id: 'moka-frio',
    name: 'Moka frío',
    description: 'Espresso con chocolate, leche y hielo.',
    price: 65,
    categoryId: 'bebidas',
    available: true,
    order: 6,
  },
  {
    id: 'latte-salted-caramel-frio',
    name: 'Latte salted caramel',
    description: 'Latte frío con sirope de caramelo salado.',
    price: 80,
    categoryId: 'bebidas',
    available: true,
    order: 7,
  },
  {
    id: 'coca-cola',
    name: 'Coca Cola',
    description: 'Normal o sin azúcar.',
    price: 35,
    categoryId: 'bebidas',
    available: true,
    order: 8,
  },
  {
    id: 'refresco-kirkland',
    name: 'Jugos gasificados Kirkland',
    description: 'Sin calorías. Variado: mango naranja, frambuesa, kiwi fresa.',
    price: 35,
    categoryId: 'bebidas',
    available: true,
    order: 9,
  },
  {
    id: 'te',
    name: 'Té',
    description: 'Manzanilla, frutos rojos, limón, manzana y canela.',
    price: 35, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 10,
  },
  {
    id: 'agua-embotellada',
    name: 'Agua embotellada',
    price: 20, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 11,
  },

  // ---------------------- PANES Y SANDWICHES · Barra de panes ----------------------
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Hojaldre mantequilloso horneado cada mañana.',
    price: 35,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 1,
  },
  {
    id: 'chocolatin',
    name: 'Chocolatín',
    description: 'Pan de hojaldre relleno de chocolate.',
    price: 45,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 2,
  },
  {
    id: 'tartaleta-fruta',
    name: 'Tartaleta de fruta',
    description: 'Tartaleta de masa quebrada con crema pastelera y fruta fresca.',
    price: 45,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 3,
  },
  {
    id: 'pan-zanahoria-individual',
    name: 'Panqué de zanahoria — Individual',
    description: 'Panqué húmedo de zanahoria con especias y canela. Presentación individual.',
    price: 80,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    featured: true,
    order: 4,
  },
  {
    id: 'pan-zanahoria-chico',
    name: 'Panqué de zanahoria — Chico',
    description: 'Panqué húmedo de zanahoria con especias y canela. Tamaño chico.',
    price: 160,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 5,
  },
  {
    id: 'pan-zanahoria-grande',
    name: 'Panqué de zanahoria — Grande',
    description: 'Panqué húmedo de zanahoria con especias y canela. Tamaño grande.',
    price: 280,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 6,
  },
  {
    id: 'rol-canela',
    name: 'Rol de canela',
    description: 'Espiral suave y esponjosa con canela y glaseado artesanal.',
    price: 50,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    featured: true,
    order: 7,
  },
  {
    id: 'rol-canela-nuez',
    name: 'Rol de canela con nuez',
    description: 'Nuestro clásico rol de canela con nuez caramelizada.',
    price: 60,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 8,
  },
  {
    id: 'rol-canela-queso-bola',
    name: 'Rol de canela con nutella y queso de bola',
    description: 'Rol de canela con relleno de nutella y cobertura de queso de bola.',
    price: 70,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 9,
  },
  {
    id: 'tiramisu',
    name: 'Tiramisú',
    description: 'Postre italiano con café espresso, mascarpone y cacao.',
    price: 100,
    categoryId: 'panes-sandwiches',
    subcategory: 'Barra de panes',
    available: true,
    order: 10,
  },

  // ---------------------- PANES Y SANDWICHES · Sandwiches ----------------------
  {
    id: 'pizzarol',
    name: 'PizzaRol',
    description: 'Rol de masa suave con ingredientes estilo pizza, horneado al momento.',
    price: 65,
    categoryId: 'panes-sandwiches',
    subcategory: 'Sandwiches',
    available: true,
    order: 11,
  },
  {
    id: 'focaccia-carnes-frias',
    name: 'Focaccia de carnes frías',
    description: 'Pan focaccia artesanal cubierto con selección de carnes frías.',
    price: 140,
    categoryId: 'panes-sandwiches',
    subcategory: 'Sandwiches',
    available: true,
    order: 12,
  },
  {
    id: 'focaccia-pechuga-pavo',
    name: 'Focaccia de pechuga de pavo',
    description: 'Pan focaccia artesanal con pechuga de pavo y hierbas.',
    price: 110,
    categoryId: 'panes-sandwiches',
    subcategory: 'Sandwiches',
    available: true,
    order: 13,
  },

  // ---------------------- EXTRAS ----------------------
  {
    id: 'shot-espresso',
    name: 'Shot de espresso',
    price: 25,
    categoryId: 'extras',
    available: true,
    order: 1,
  },
  {
    id: 'salsa-caramelo-salado',
    name: 'Salsa de caramelo salado',
    description: '30g.',
    price: 20,
    categoryId: 'extras',
    available: true,
    order: 2,
  },
  {
    id: 'leche-almendra',
    name: 'Leche de almendra',
    price: 15,
    categoryId: 'extras',
    available: true,
    order: 3,
  },
  {
    id: 'prosciutto',
    name: 'Prosciutto',
    description: '30g.',
    price: 35,
    categoryId: 'extras',
    available: true,
    order: 4,
  },
];

/** Menú completo ya ensamblado. */
export const LOCAL_MENU: Menu = {
  config: SITE_CONFIG,
  categories: CATEGORIES,
  products: PRODUCTS,
};

/**
 * Implementación local de `MenuDataSource`.
 * Devuelve el menú de forma asíncrona para ser compatible, en el futuro,
 * con una fuente basada en red (Supabase) sin cambiar el `MenuService`.
 */
@Injectable()
export class LocalMenuDataSource implements MenuDataSource {
  loadMenu(): Promise<Menu> {
    return Promise.resolve(LOCAL_MENU);
  }
}
