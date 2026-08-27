import { computed, inject, Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { SiteConfig } from '../models/site-config.model';
import { MENU_DATA_SOURCE } from './menu-data-source';

/** Id especial de la pestaña "Todos". */
export const ALL_CATEGORIES = 'all';

/**
 * Punto único de acceso al menú para toda la app.
 *
 * Los componentes visuales dependen SOLO de este servicio, nunca de la
 * fuente de datos concreta. Cambiar de datos locales a Supabase se reduce
 * a cambiar el provider de `MENU_DATA_SOURCE`.
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly source = inject(MENU_DATA_SOURCE);

  /** Estado interno cargado desde la fuente de datos. */
  private readonly _config = signal<SiteConfig | null>(null);
  private readonly _categories = signal<Category[]>([]);
  private readonly _products = signal<Product[]>([]);
  private readonly _loading = signal(true);

  /** Categoría seleccionada en la navegación (por defecto: Todos). */
  readonly activeCategoryId = signal<string>(ALL_CATEGORIES);

  /** Lecturas públicas de solo lectura. */
  readonly config = this._config.asReadonly();
  readonly loading = this._loading.asReadonly();

  /** Categorías ordenadas. */
  readonly categories = computed(() =>
    [...this._categories()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
  );

  /**
   * Categorías que se deben mostrar según la pestaña activa.
   * "Todos" muestra todas; una categoría concreta muestra solo esa.
   */
  readonly visibleCategories = computed(() => {
    const active = this.activeCategoryId();
    const all = this.categories();
    return active === ALL_CATEGORIES ? all : all.filter((c) => c.id === active);
  });

  constructor() {
    void this.load();
  }

  /** Carga el menú desde la fuente de datos. */
  private async load(): Promise<void> {
    this._loading.set(true);
    const menu = await this.source.loadMenu();
    this._config.set(menu.config);
    this._categories.set(menu.categories);
    this._products.set(menu.products);
    this._loading.set(false);
  }

  /** Cambia la categoría activa. */
  selectCategory(categoryId: string): void {
    this.activeCategoryId.set(categoryId);
  }

  /** Productos de una categoría, ordenados y sin ocultos. */
  productsOf(categoryId: string): Product[] {
    return this._products()
      .filter((p) => p.categoryId === categoryId)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }
}
