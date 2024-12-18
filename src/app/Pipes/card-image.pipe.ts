import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardImage'
})
export class CardImagePipe implements PipeTransform {

  transform(value:string): string|null{

    if(!value||value.length<2){
      return null;
    }

    const firstTwoDigits = value.substring(0,2);
    if( parseInt(firstTwoDigits)<=50){
      return 'assets/images/masterCard.jpg';
    }
    else{
      return 'assets/images/visaCard.jpg';
    }
    
  }

}
