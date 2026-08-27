import { Category } from './category.model';
import { Product } from './product.model';
import { SiteConfig } from './site-config.model';

/**
 * Estructura completa del menú que consumen los componentes visuales.
 * Es lo que devuelve cualquier fuente de datos (local hoy, Supabase mañana).
 */
export interface Menu {
  /** Configuración de marca y redes. */
  config: SiteConfig;
  /** Categorías disponibles, ya ordenadas. */
  categories: Category[];
  /** Lista plana de productos (se agrupan por categoría en la vista). */
  products: Product[];
}
