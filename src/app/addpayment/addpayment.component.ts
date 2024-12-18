import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrl: './addpayment.component.css'
})
export class AddpaymentComponent {
   details:any={};
   
   constructor(public paymentAdd:PaymentService){

   }

   addDetails(form:NgForm){
     this.details=form.value;
     //console.log(this.details);
     this.paymentAdd.addDetails(this.details);
     form.reset();
   }
}
