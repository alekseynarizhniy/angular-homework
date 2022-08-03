import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firsttouppercase' })
export class FirstToUppercase implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value[0].toUpperCase() + value.slice(1);
  }
}
