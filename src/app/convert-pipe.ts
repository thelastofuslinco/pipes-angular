import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, args);

    switch (args[0]) {
      case 'km-to-miles':
        if (typeof value === 'number') {
          return value * 0.621371;
        }
        break;
      case 'miles-to-km':
        if (typeof value === 'number') {
          return value / 0.621371;
        }
        break;
      default:
        break;
    }

    return value;
  }
}
