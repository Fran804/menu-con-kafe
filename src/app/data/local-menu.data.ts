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

   ⚠️ Algunos precios son provisionales (marcados con  // TODO: confirmar).
      Solo están confirmados los de la imagen del menú actual.
   =========================================================================== */

/** Configuración de marca y redes sociales. */
const SITE_CONFIG: SiteConfig = {
  name: 'Con KaFe',
  tagline: 'Panadería & Café',
  social: {
    // Reemplaza con los enlaces reales cuando los tengas.
    instagram: '',
    facebook: '',
    tiktok: '',
    whatsapp: '', // Ej: "5215512345678" (formato internacional, solo dígitos)
  },
};

/** Categorías del menú (ordenadas). */
const CATEGORIES: Category[] = [
  { id: 'panaderia', name: 'Panadería', order: 1 },
  { id: 'bebidas', name: 'Bebidas', order: 2 },
];

/** Productos del menú. El precio va como número; la UI le añade el símbolo. */
const PRODUCTS: Product[] = [
  // ---------------------- PANADERÍA ----------------------
  {
    id: 'pan-zanahoria',
    name: 'Pan de zanahoria',
    description: 'Panqué húmedo de zanahoria con especias y un toque de canela. Hecho en casa.',
    price: 80, // TODO: confirmar
    categoryId: 'panaderia',
    available: true,
    featured: true,
    order: 1,
  },
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Hojaldre mantequilloso horneado cada mañana.',
    price: 83,
    categoryId: 'panaderia',
    available: true,
    order: 2,
  },
  {
    id: 'chocolatin',
    name: 'Chocolatín',
    description: 'Pan de hojaldre relleno de chocolate.',
    price: 90,
    categoryId: 'panaderia',
    available: true,
    order: 3,
  },
  {
    id: 'rol-canela',
    name: 'Rol de canela',
    description: 'Espiral suave y esponjosa con canela y glaseado artesanal.',
    price: 115,
    categoryId: 'panaderia',
    available: true,
    featured: true,
    order: 4,
  },
  {
    id: 'rol-canela-nuez',
    name: 'Rol de canela con nuez',
    description: 'Nuestro clásico rol de canela con nuez caramelizada.',
    price: 95,
    categoryId: 'panaderia',
    available: true,
    order: 5,
  },
  {
    id: 'tiramisu',
    name: 'Tiramisú',
    description: 'Postre italiano con café, mascarpone y cacao.',
    price: 95, // TODO: confirmar
    categoryId: 'panaderia',
    available: true,
    order: 6,
  },
  {
    id: 'rol-salado',
    name: 'Rol salado',
    description: 'Rol relleno salado, ideal para acompañar tu café.',
    price: 85, // TODO: confirmar
    categoryId: 'panaderia',
    available: true,
    order: 7,
  },
  {
    id: 'tarta-frutos-rojos',
    name: 'Tarta de frutos rojos',
    description: 'Base crujiente con crema y frutos rojos frescos.',
    price: 110, // TODO: confirmar
    categoryId: 'panaderia',
    available: true,
    order: 8,
  },
  {
    id: 'hojaldras',
    name: 'Hojaldras',
    description: 'Hojaldre azucarado, crujiente por fuera y suave por dentro.',
    price: 35, // TODO: confirmar
    categoryId: 'panaderia',
    available: true,
    order: 9,
  },
  {
    id: 'bolitas-queso',
    name: 'Bolitas de queso',
    description: 'Bocaditos fritos de queso, doraditos y esponjosos.',
    price: 40, // TODO: confirmar
    categoryId: 'panaderia',
    available: true,
    order: 10,
  },

  // ---------------------- BEBIDAS ----------------------
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Shot intenso de café de especialidad.',
    price: 35, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 1,
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso con agua caliente. Refill disponible.',
    price: 40, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 2,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso con leche vaporizada y espuma cremosa.',
    price: 55, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 3,
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Espresso suave con abundante leche vaporizada.',
    price: 60, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 4,
  },
  {
    id: 'flat-white',
    name: 'Flat white',
    description: 'Doble espresso con microespuma sedosa.',
    price: 60, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 5,
  },
  {
    id: 'cafe-normal',
    name: 'Café normal',
    description: 'Café de la casa recién preparado.',
    price: 30, // TODO: confirmar
    categoryId: 'bebidas',
    available: true,
    order: 6,
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
