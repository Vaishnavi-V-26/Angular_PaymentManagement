import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-editpayment',
  templateUrl: './editpayment.component.html',
  styleUrl: './editpayment.component.css'
})
export class EditpaymentComponent implements OnChanges{

  userName:string='';
  userCardNumber:number=0;
  userPrice:number=0;

  updatedForm:any={};

  @Input('myUserDetails') userDetails:any={};

  constructor(public paymentEdit:PaymentService){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.userName=this.userDetails.name;
      this.userCardNumber=this.userDetails.cardNumber;
      this.userPrice=this.userDetails.price;
  }

  update(updateForm:any){
    this.updatedForm=updateForm.value;
    this.paymentEdit.updatePayment(this.updatedForm);
  }

  cancel(){
    this.paymentEdit.showEdit = false;
  }
 
}
