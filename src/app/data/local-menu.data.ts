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
  { id: 'panaderia', name: 'Panadería', order: 1 },
  { id: 'comidas',   name: 'Comidas',   order: 2 },
  { id: 'bebidas',   name: 'Bebidas',   order: 3 },
];

/** Productos del menú. El precio va como número; la UI le añade el símbolo. */
const PRODUCTS: Product[] = [
  // ---------------------- PANADERÍA · Dulces ----------------------
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Hojaldre mantequilloso horneado cada mañana.',
    price: 83,
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    order: 1,
  },
  {
    id: 'chocolatin',
    name: 'Chocolatín',
    description: 'Pan de hojaldre relleno de chocolate.',
    price: 90,
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    order: 2,
  },
  {
    id: 'pan-zanahoria-domo',
    name: 'Pan de zanahoria — Domo',
    description: 'Panqué húmedo de zanahoria con especias y canela. Presentación individual domo.',
    price: 80, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    featured: true,
    order: 3,
  },
  {
    id: 'pan-zanahoria-chico',
    name: 'Pan de zanahoria — Panqué chico',
    description: 'Panqué húmedo de zanahoria con especias y canela. Tamaño chico.',
    price: 80, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    order: 4,
  },
  {
    id: 'pan-zanahoria-grande',
    name: 'Pan de zanahoria — Panqué grande',
    description: 'Panqué húmedo de zanahoria con especias y canela. Tamaño grande.',
    price: 80, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    order: 5,
  },
  {
    id: 'rol-canela',
    name: 'Rol de canela',
    description: 'Espiral suave y esponjosa con canela y glaseado artesanal.',
    price: 115,
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    featured: true,
    order: 6,
  },
  {
    id: 'rol-canela-nuez',
    name: 'Rol de canela con nuez',
    description: 'Nuestro clásico rol de canela con nuez caramelizada.',
    price: 95,
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    order: 7,
  },
  {
    id: 'tiramisu',
    name: 'Tiramisú',
    description: 'Postre italiano con café espresso, mascarpone y cacao.',
    price: 95, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Dulces',
    available: true,
    order: 8,
  },

  // ---------------------- PANADERÍA · Salados ----------------------
  {
    id: 'pizzarol',
    name: 'PizzaRol',
    description: 'Rol de masa suave con ingredientes estilo pizza, horneado al momento.',
    price: 85, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Salados',
    available: true,
    order: 9,
  },
  {
    id: 'bolitas-queso',
    name: 'Bolitas de queso',
    description: 'Bocaditos fritos de queso, dorados y esponjosos.',
    price: 40, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Salados',
    available: true,
    order: 10,
  },
  {
    id: 'hojaldras',
    name: 'Hojaldras',
    description: 'Hojaldre azucarado, crujiente por fuera y suave por dentro.',
    price: 35, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Salados',
    available: true,
    order: 11,
  },
  {
    id: 'rol-canela-queso-bola',
    name: 'Rol de canela con nutella y queso de bola',
    description: 'Rol de canela con relleno de nutella y cobertura de queso de bola.',
    price: 95, // TODO: confirmar
    categoryId: 'panaderia',
    subcategory: 'Salados',
    available: true,
    order: 12,
  },

  // ---------------------- COMIDAS ----------------------
  {
    id: 'focaccia-carnes-frias',
    name: 'Focaccia de carnes frías',
    description: 'Pan focaccia artesanal cubierto con selección de carnes frías.',
    price: 95, // TODO: confirmar
    categoryId: 'comidas',
    available: true,
    order: 1,
  },
  {
    id: 'focaccia-pechuga-pavo',
    name: 'Focaccia de pechuga de pavo',
    description: 'Pan focaccia artesanal con pechuga de pavo y hierbas.',
    price: 95, // TODO: confirmar
    categoryId: 'comidas',
    available: true,
    order: 2,
  },

  // ---------------------- BEBIDAS · Calientes ----------------------
  {
    id: 'americano-caliente',
    name: 'Americano caliente',
    description: 'Espresso con agua caliente.',
    price: 55, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Calientes',
    available: true,
    order: 1,
  },
  {
    id: 'capuchino-caliente',
    name: 'Capuchino',
    description: 'Espresso con leche vaporizada y espuma cremosa.',
    price: 70, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Calientes',
    available: true,
    order: 2,
  },
  {
    id: 'moka-caliente',
    name: 'Moka',
    description: 'Espresso con chocolate y leche vaporizada.',
    price: 75, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Calientes',
    available: true,
    order: 3,
  },
  {
    id: 'capuchino-salted-caramel',
    name: 'Capuchino salted caramel',
    description: 'Capuchino con sirope de caramelo salado y espuma cremosa.',
    price: 80, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Calientes',
    available: true,
    order: 4,
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso suave con abundante leche vaporizada.',
    price: 75, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Frías',
    available: true,
    order: 5,
  },
  {
    id: 'latte-tiramisu',
    name: 'Latte tiramisú',
    description: 'Latte con sirope de tiramisú, inspirado en el postre clásico italiano.',
    price: 85, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Frías',
    available: true,
    order: 6,
  },

  // ---------------------- BEBIDAS · Frías ----------------------
  {
    id: 'americano-frio',
    name: 'Americano frío',
    description: 'Espresso con agua fría y hielo.',
    price: 60, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Frías',
    available: true,
    order: 7,
  },
  {
    id: 'moka-frio',
    name: 'Moka frío',
    description: 'Espresso con chocolate, leche y hielo.',
    price: 80, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Frías',
    available: true,
    order: 8,
  },
  {
    id: 'latte-salted-caramel-frio',
    name: 'Latte salted caramel',
    description: 'Latte frío con sirope de caramelo salado.',
    price: 80, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Frías',
    available: true,
    order: 9,
  },
  {
    id: 'refrescos',
    name: 'Refrescos',
    description: 'Coca-Cola normal o sin azúcar. Bebidas gasificadas: mango naranja, frambuesa, kiwi fresa.',
    price: 40, // TODO: confirmar
    categoryId: 'bebidas',
    subcategory: 'Frías',
    available: true,
    order: 10,
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
