import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  userDetails = [{ name: "Vaishnavi", cardNumber: 2569837858692569, price: 500 },
  { name: "Arun", cardNumber: 5699821286932475, price: 550 },
  { name: "Pradeep", cardNumber: 6598357815638975, price: 1520 },
  { name: "Dhanasekar", cardNumber: 5666982556236589, price: 1000 },
  { name: "Lincy", cardNumber: 6985542812569875, price: 2300 },
  { name: "Abdul", cardNumber: 5698896321758936, price: 2000 }
  ];

  showEdit = false;
  selectedIndex = -1;

  constructor() { }

  addDetails(details: any) {
    const formatCardNumber = details.cardNumber.toString().replace(/-/g, '');
    this.userDetails.push({ name: details.name, cardNumber: formatCardNumber, price: details.price });
  }

  listProducts() {
    return this.userDetails;
  }

  editPayment(index: number) {
    this.selectedIndex = index;
    return this.userDetails[index];
  }

  deletePayment(index: number) {
    if (confirm("Are you sure want to delete this payment?"))
      this.userDetails.splice(index, 1);
  }

  updatePayment(updatedForm:any) {
    this.userDetails[this.selectedIndex] = updatedForm;
    this.showEdit = false;
  }

  cancel() {
    this.showEdit = false;
  }
}
