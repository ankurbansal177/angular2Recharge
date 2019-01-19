import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RechargeSelectorComponent } from './recharge-selector/recharge-selector.component';
import {PaymentComponent} from './payment/payment.component';
import {PaymentSuccessfulComponent} from './payment-successful/payment-successful.component';

const routes: Routes = [
  { path: 'recharge', component: RechargeSelectorComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'paymentSuccessful', component: PaymentSuccessfulComponent}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
