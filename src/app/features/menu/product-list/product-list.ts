import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Category } from '../../../core/models/category.model';
import { Product } from '../../../core/models/product.model';
import { ProductItem } from '../product-item/product-item';

/**
 * Sección de una categoría: título elegante + lista de productos.
 * No conoce la fuente de datos; recibe categoría y productos por input.
 */
@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  readonly category = input.required<Category>();
  readonly products = input.required<Product[]>();
  readonly select = output<Product>();

  /** Añade una bandera a cada producto para saber si debe mostrar su separador de subcategoría. */
  readonly rows = computed(() => {
    const products = this.products();
    return products.map((product, i) => ({
      product,
      showLabel: !!product.subcategory && product.subcategory !== products[i - 1]?.subcategory,
    }));
  });
}
