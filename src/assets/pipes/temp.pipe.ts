import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'temp'})
export class TempPipe implements PipeTransform {

  transform(value: any, CorF: string) {
    if (CorF === 'C') {
      return value - 272.15;
    } else {
      return value * 9 / 5 - 459.67;
    }
  }
}

@Pipe({name: 'ForC'})
export class ForCPipe implements PipeTransform {

  transform(value: any, ForC: string) {
    if (ForC === 'C') {
      return 'o';
    } else {
      return 'F';
    }
  }
}
