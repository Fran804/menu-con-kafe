import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';

/**
 * Encabezado de marca: bloque verde oscuro con escudo, nombre y lema.
 * Lee la marca desde el `MenuService` (datos, no hardcode).
 */
@Component({
  selector: 'app-menu-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.scss',
})
export class MenuHeader {
  private readonly menu = inject(MenuService);
  readonly config = this.menu.config;
}
