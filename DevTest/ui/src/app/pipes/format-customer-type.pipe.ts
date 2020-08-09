import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'formatCustomerType' })
export class FormatCustomerTypePipe implements PipeTransform {
  transform(type: number): string {
    if (type === 1) {
      return 'Large';
    } else {
      return 'Small';
    }
  }
}
