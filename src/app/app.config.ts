import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { MENU_DATA_SOURCE } from './core/services/menu-data-source';
import { LocalMenuDataSource } from './data/local-menu.data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    /**
     * Fuente de datos del menú.
     * 👉 Para migrar a Supabase en el futuro, basta con reemplazar
     *    `LocalMenuDataSource` por `SupabaseMenuDataSource` aquí.
     *    Ningún componente visual necesita cambios.
     */
    { provide: MENU_DATA_SOURCE, useClass: LocalMenuDataSource },
  ],
};
