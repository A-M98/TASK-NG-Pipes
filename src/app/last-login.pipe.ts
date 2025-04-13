import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastLogin',
  standalone: true,
})
export class LastLoginPipe implements PipeTransform {
  transform(value: Date): unknown {
    const daysAgo =
      (Date.now() - new Date(value).getTime()) / (1000 * 60 * 60 * 24);

    let lastLoginstring = '';
    if (daysAgo <= 7) lastLoginstring = '🔥';
    if (daysAgo < 30 && daysAgo > 7) lastLoginstring = '🛌';
    if (daysAgo <= 90 && daysAgo > 30) lastLoginstring = '🦥';
    if (daysAgo > 90) lastLoginstring = '☠️';
    return lastLoginstring;
  }
}
