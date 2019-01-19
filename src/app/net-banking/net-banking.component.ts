import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../payment/payment.service';
import {PaymentType} from '../PaymentType';
import {Router} from '@angular/router';
import {NetBanking} from '../NetBanking';
@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css'],
  providers: [PaymentService]
})
export class NetBankingComponent implements OnInit {
  bankOptions: PaymentType[] = [];
  selectedBank: PaymentType = null;
  amount: number;
  constructor(private paymentService: PaymentService, private router: Router) {
    const price = sessionStorage.getItem('price')
    if (price){
      this.amount = Number(price);
    } else {
       this.router.navigateByUrl('/recharge');
    }
    this.paymentService.getBankOptions().subscribe(response => {
      this.bankOptions = response;
    });
  }

  ngOnInit() {
  }
  updateBank($event) {
    console.log($event);
  }
  postPayment() {
    this.paymentService.postNetBankingDetails(<NetBanking>{amount: this.amount, selectedBank: this.selectedBank}).subscribe(response => {
      if (response.valid) {
        this.router.navigateByUrl('/paymentSuccessful');
      }
    });
  }

}
