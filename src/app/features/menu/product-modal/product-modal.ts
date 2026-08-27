import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { PricePipe } from '../../../shared/pipes/price.pipe';

/**
 * Detalle del producto en modal (desktop) / bottom sheet (móvil).
 * Se cierra con la X, clic fuera o tecla ESC. Bloquea el scroll de fondo
 * y mueve el foco al abrirse para una buena experiencia con teclado.
 */
@Component({
  selector: 'app-product-modal',
  imports: [PricePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss',
})
export class ProductModal {
  /** Producto a mostrar. `null` = modal cerrado. */
  readonly product = input<Product | null>(null);
  /** Se emite cuando el usuario pide cerrar. */
  readonly closed = output<void>();

  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  constructor() {
    effect(() => {
      const isOpen = this.product() !== null;
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) {
        queueMicrotask(() => this.closeButton()?.nativeElement.focus());
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.product()) {
      this.close();
    }
  }

  /** Cierra solo si el clic fue sobre el fondo, no sobre el contenido. */
  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
