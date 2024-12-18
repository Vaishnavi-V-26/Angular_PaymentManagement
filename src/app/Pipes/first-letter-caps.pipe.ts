import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCaps'
})
export class FirstLetterCapsPipe implements PipeTransform {

  transform(value: string): string{
    
    var firstLetter = value[0];
    var remainingStr = value.slice(1,value.length);
    var name = firstLetter.toUpperCase()+remainingStr;
    return name;
  }

}
