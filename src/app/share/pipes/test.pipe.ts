import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    let len=value.length>7?true:false;
    let maj=value.match(/[A-Z]/) ?  true : false;
    let min=value.match(/[0-9]/) ? true : false;

    let res= (len && maj && min) ? 'password fort ' : 'password faible';

    return res;
  }

}
