import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';

/**
 * Pie de página: marca y enlaces a redes sociales.
 * Los enlaces vienen de la configuración; si están vacíos, el icono
 * se muestra igualmente pero deshabilitado hasta tener la URL real.
 */
@Component({
  selector: 'app-menu-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-footer.html',
  styleUrl: './menu-footer.scss',
})
export class MenuFooter {
  private readonly menu = inject(MenuService);
  readonly config = this.menu.config;
  readonly year = new Date().getFullYear();

  /** Construye el enlace de WhatsApp a partir del número configurado. */
  readonly whatsappUrl = computed(() => {
    const num = this.config()?.social.whatsapp?.trim();
    return num ? `https://wa.me/${num}` : '';
  });
}
