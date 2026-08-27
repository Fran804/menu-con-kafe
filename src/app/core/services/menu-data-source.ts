import { InjectionToken } from '@angular/core';
import { Menu } from '../models/menu.model';

/**
 * Contrato de cualquier fuente de datos del menú.
 *
 * Hoy lo implementa `LocalMenuDataSource` (datos en código).
 * En el futuro lo implementará `SupabaseMenuDataSource` sin necesidad
 * de tocar los componentes visuales: solo se cambia el provider.
 *
 * Es asíncrono a propósito, para que la migración a Supabase (que hace
 * peticiones de red) no obligue a reescribir el `MenuService`.
 */
export interface MenuDataSource {
  loadMenu(): Promise<Menu>;
}

/** Token de inyección para desacoplar el servicio de la implementación concreta. */
export const MENU_DATA_SOURCE = new InjectionToken<MenuDataSource>('MENU_DATA_SOURCE');
