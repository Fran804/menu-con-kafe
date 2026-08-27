import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { PricePipe } from '../../../shared/pipes/price.pipe';

/**
 * Fila de un producto: toda la fila es un botón táctil.
 * Muestra nombre, línea punteada y precio; marca AGOTADO si no está disponible.
 */
@Component({
  selector: 'app-product-item',
  imports: [PricePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  readonly product = input.required<Product>();
  readonly select = output<Product>();

  onSelect(): void {
    this.select.emit(this.product());
  }
}
