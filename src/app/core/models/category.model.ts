/**
 * Categoría del menú (ej. "Panadería", "Bebidas").
 * Los productos referencian su categoría mediante `Product.categoryId`.
 */
export interface Category {
  /** Identificador único y estable de la categoría. */
  id: string;
  /** Nombre visible de la categoría. */
  name: string;
  /** Orden de aparición (menor = primero). */
  order?: number;
}
