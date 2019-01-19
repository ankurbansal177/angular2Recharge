import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit {
  amount: number;
  constructor(private router: Router) {
    this.amount = Number(sessionStorage.getItem('price'));
  }
  navigateToFirstPage() {
    sessionStorage.clear();
    this.router.navigateByUrl('/recharge');
  }
  ngOnInit() {
  }

}
