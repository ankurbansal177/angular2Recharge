import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {nav, button, tab} from 'bootstrap';

import { AppComponent } from './app.component';
import { RechargeSelectorComponent } from './recharge-selector/recharge-selector.component';
import { AppRoutingModule } from './/app-routing.module';
import { RechargeBannerComponent } from './recharge-banner/recharge-banner.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { CreditCardDirectivesModule } from 'ng2-cc-library';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import {ValidatorsModule} from 'ngx-validators';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';

@NgModule({
  declarations: [
    AppComponent,
    RechargeSelectorComponent,
    RechargeBannerComponent,
    PaymentComponent,
    NetBankingComponent,
    CardPaymentComponent,
    PaymentSuccessfulComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CreditCardDirectivesModule,
    ValidatorsModule,
    ReactiveFormsModule
  ],
  providers: [CreditCardDirectivesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
