/**
 * Representa un producto del menú (pan, postre, bebida, etc.).
 *
 * Los campos coinciden con lo que, más adelante, el POS podrá controlar
 * desde Supabase (nombre, precio, disponible, destacado, orden...).
 */
export interface Product {
  /** Identificador único y estable del producto. */
  id: string;
  /** Nombre visible del producto. */
  name: string;
  /** Descripción opcional que se muestra en el detalle. */
  description?: string;
  /** Precio en la moneda local (sin símbolo). Ej: 80 => "$80". */
  price: number;
  /** Categoría a la que pertenece (referencia a Category.id). */
  categoryId: string;
  /** Ruta local de la imagen. Opcional: si no existe se usa un placeholder. */
  imageUrl?: string;
  /** Si está disponible para venta. `false` => se muestra como AGOTADO. */
  available: boolean;
  /** Marca el producto como destacado/favorito (reservado para uso futuro). */
  featured?: boolean;
  /** Orden de aparición dentro de su categoría (menor = primero). */
  order?: number;
}
