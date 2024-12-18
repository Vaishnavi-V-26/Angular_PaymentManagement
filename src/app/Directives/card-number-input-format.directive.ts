import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appCardNumberInputFormat]'
})
export class CardNumberInputFormatDirective  {
 
  constructor(public elRef:ElementRef) { }

  @HostListener('input' ) cardNumber(){

    var inputValue=this.elRef.nativeElement.value;
    if(inputValue.length<=19){
    var formattedValue = inputValue.match(/\d{1,4}/g)?.join('-');
    this.elRef.nativeElement.value=formattedValue;
    }
  }

  
  

}
