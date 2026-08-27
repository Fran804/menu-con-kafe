import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
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
}
