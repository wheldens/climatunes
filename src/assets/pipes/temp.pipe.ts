import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'temp'})
export class TempPipe implements PipeTransform {

  transform(value: any) {
    return value - 272.15;
  }
}
