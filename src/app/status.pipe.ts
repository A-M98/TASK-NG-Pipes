import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true,
})
export class StatusPipe implements PipeTransform {
  transform(value: string): unknown {
    let color = '';
    if (value === 'active') color = 'green';
    else if (value === 'inactive') color = 'red';
    else color = 'orange';
    return color;
  }
}
