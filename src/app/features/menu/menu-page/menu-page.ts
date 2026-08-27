import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { MenuService } from '../../../core/services/menu.service';
import { CategoryNavigation } from '../category-navigation/category-navigation';
import { MenuFooter } from '../menu-footer/menu-footer';
import { MenuHeader } from '../menu-header/menu-header';
import { ProductList } from '../product-list/product-list';
import { ProductModal } from '../product-modal/product-modal';

/**
 * Página principal del menú: orquesta encabezado, navegación, listas de
 * productos, pie de página y el modal de detalle. Es el único componente
 * que mantiene el estado del producto seleccionado.
 */
@Component({
  selector: 'app-menu-page',
  imports: [MenuHeader, CategoryNavigation, ProductList, MenuFooter, ProductModal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss',
})
export class MenuPage {
  private readonly menu = inject(MenuService);

  readonly categories = this.menu.categories;
  readonly loading = this.menu.loading;

  /** Producto abierto en el modal (null = cerrado). */
  readonly selectedProduct = signal<Product | null>(null);

  productsOf(categoryId: string): Product[] {
    return this.menu.productsOf(categoryId);
  }

  openProduct(product: Product): void {
    this.selectedProduct.set(product);
  }

  closeProduct(): void {
    this.selectedProduct.set(null);
  }
}
