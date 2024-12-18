import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberFormat'
})
export class CardNumberFormatPipe implements PipeTransform {

  transform(value: string|null): string {
   
  if (!value) {
      return '';
    }

    //const inputValue = value.toString().replace(/-/g, '');
    const lastFourDigits = value.toString().slice(-4);
    const remainingDigits = value.toString().length - lastFourDigits.length;
    const format = '*'.repeat(remainingDigits);
    const formattedValue = format + lastFourDigits;

    var formattedCardNumber = '';
    for (let i = 0; i < formattedValue.length; i++) {
      if (i > 0 && i % 4 === 0 ) {
        formattedCardNumber += ' ';
      }
      formattedCardNumber += formattedValue[i];
    }

    return formattedCardNumber;
  }

}
