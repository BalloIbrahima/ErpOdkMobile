import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboard'
})
export class DashboardPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
