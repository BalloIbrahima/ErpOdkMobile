import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accueil'
})
export class AccueilPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
