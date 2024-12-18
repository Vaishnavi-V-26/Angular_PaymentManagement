import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchBy: string, searchTxt: string): any[] {
    if (value.length === 0 || searchBy.length === 0 || searchTxt.length === 0) {
      return value;
    }
    
    var filterArr:any[] = [];
    for(var i=0 ; i<value.length ; i++){
      if(searchBy === 'name' && value[i].name.toLowerCase().includes(searchTxt.toLowerCase())){
        filterArr.push(value[i]);
      }
      else if(searchBy === 'cardNumber' && value[i].cardNumber.toString().includes(searchTxt)){
        filterArr.push(value[i]);
      }
      else if(searchBy === 'price' && value[i].price === +searchTxt){
        filterArr.push(value[i]);
      }
    }

    return filterArr;
  }

}
