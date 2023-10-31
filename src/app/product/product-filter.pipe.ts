import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    const filterTextLower = filterText ? filterText.toLocaleLowerCase() : undefined;

    return filterTextLower ? value.filter((p: Product) => p.name.toLocaleLowerCase().includes(filterTextLower)) : value;
}


}
