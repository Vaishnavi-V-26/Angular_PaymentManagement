import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { FormsModule } from '@angular/forms';
import { EditpaymentComponent } from './editpayment/editpayment.component';
import { PaymentService } from './payment.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { FirstLetterCapsPipe } from './Pipes/first-letter-caps.pipe';
import { CardImagePipe } from './Pipes/card-image.pipe';
import { CardNumberFormatPipe } from './Pipes/card-number-format.pipe';
import { CardNumberInputFormatDirective } from './Directives/card-number-input-format.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddpaymentComponent,
    ListpaymentComponent,
    EditpaymentComponent,
    FilterPipe,
    FirstLetterCapsPipe,
    CardImagePipe,
    CardNumberFormatPipe,
    CardNumberInputFormatDirective,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
