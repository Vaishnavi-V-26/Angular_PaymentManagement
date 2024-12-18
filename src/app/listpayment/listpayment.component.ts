import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from '../payment.service';
import { EditpaymentComponent } from '../editpayment/editpayment.component';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrl: './listpayment.component.css'
})
export class ListpaymentComponent implements OnInit{

  searchBy: string = 'name';
  searchTxt: string = '';
  userDetails: any={};

  usersPayment: any[] = [];
  constructor(public paymentList: PaymentService) {
  
  }

  ngOnInit(): void {
    this.usersPayment = this.paymentList.listProducts(); 
  }

  editPayment(index: number) {
    this.paymentList.showEdit = true;
    this.userDetails = this.paymentList.editPayment(index);
  }


  deletePayment(index: number) {
    this.paymentList.deletePayment(index);
  }


}
