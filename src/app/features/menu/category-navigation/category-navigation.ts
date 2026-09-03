import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ALL_CATEGORIES, MenuService } from '../../../core/services/menu.service';

/**
 * Barra de categorías con scroll horizontal en móvil.
 *
 * No filtra el contenido: al pulsar una categoría se desplaza suavemente a su
 * sección. El chip activo se resalta automáticamente según la sección visible
 * (scroll-spy).
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

  /** Umbral (px desde el borde superior) bajo la barra fija para decidir la sección activa. */
  private readonly threshold = 90;
  private ticking = false;

  /** Desplaza suavemente a la sección elegida (o al inicio para "Todos"). */
  select(id: string): void {
    this.menu.setActiveCategory(id);

    if (id === this.all) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document
      .getElementById('section-' + id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Resalta el chip de la sección que el usuario está viendo. */
  @HostListener('window:scroll')
  onScroll(): void {
    if (this.ticking) {
      return;
    }
    this.ticking = true;
    requestAnimationFrame(() => {
      this.updateActive();
      this.ticking = false;
    });
  }

  private updateActive(): void {
    const cats = this.categories();
    if (cats.length === 0) {
      return;
    }

    // La sección activa es la última cuyo borde superior ya pasó el umbral.
    // Por defecto resalta la primera categoría (no hay botón "Todos").
    let current = cats[0]?.id ?? this.all;
    for (const category of cats) {
      const el = document.getElementById('section-' + category.id);
      if (el && el.getBoundingClientRect().top <= this.threshold) {
        current = category.id;
      }
    }

    // Al llegar al fondo, resalta siempre la última sección.
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
    if (atBottom) {
      current = cats[cats.length - 1].id;
    }

    if (current !== this.activeId()) {
      this.menu.setActiveCategory(current);
    }
  }
}
