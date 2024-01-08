    import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNombre'
})
export class FilterByNombrePipe implements PipeTransform {
  transform(items: any[], filtro: string): any[] {
    if (!items || !filtro) {
      return items;
    }

    return items.filter(item => item.propietario_firma.toLowerCase().includes(filtro.toLowerCase()));
  }
}
