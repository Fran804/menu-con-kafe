import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formatea un precio numérico como "$1,234" (sin decimales, con separador
 * de miles). Centraliza el formato para no repetirlo en cada plantilla.
 */
@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || Number.isNaN(value)) {
      return '';
    }
    return '$' + Math.round(value).toLocaleString('es-MX');
  }
}
