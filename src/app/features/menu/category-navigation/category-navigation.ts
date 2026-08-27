import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ALL_CATEGORIES, MenuService } from '../../../core/services/menu.service';

/**
 * Barra de categorías con scroll horizontal en móvil.
 * Incluye la pestaña "Todos" y resalta la categoría activa.
 */
@Component({
  selector: 'app-category-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './category-navigation.html',
  styleUrl: './category-navigation.scss',
})
export class CategoryNavigation {
  private readonly menu = inject(MenuService);

  readonly all = ALL_CATEGORIES;
  readonly categories = this.menu.categories;
  readonly activeId = this.menu.activeCategoryId;

  select(id: string): void {
    this.menu.selectCategory(id);
  }
}
