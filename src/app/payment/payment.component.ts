import { Component, OnInit } from '@angular/core';
import {PaymentType} from '../PaymentType';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentOptions: PaymentType[] = [];
  paymentMode: number;
  constructor() {
    this.paymentOptions.push(<PaymentType>{id: 1, name: 'Credit Card'});
    // this.paymentOptions.push(<PaymentType>{id: 2, name: 'Debit Card'});
    this.paymentOptions.push(<PaymentType>{id: 3, name: 'Net Banking'});
    this.paymentMode = 1;
  }
  selectPaymentOption(id: number) {
    this.paymentMode = id;
  }

  ngOnInit() {
  }

}
