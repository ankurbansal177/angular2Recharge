import { Component, OnInit } from '@angular/core';
import { CreditCardValidator } from 'ng2-cc-library';
import {
  FormGroup, Validators, FormBuilder, NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR,
  FormControl
} from '@angular/forms';
import {Router} from '@angular/router';
import {PaymentService} from '../payment/payment.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css'],
  providers: [PaymentService]
})
export class CardPaymentComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  amount: number;
  constructor(private _fb: FormBuilder, private router: Router, private paymentService: PaymentService) {}

  ngOnInit() {
    this.amount = Number(sessionStorage.getItem('price'))
    this.form = this._fb.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });
  }

  onSubmit(form) {
    this.submitted = true;
    console.log(form);
    if (form.valid) {
      const obj  = form.value;
      obj.amount = this.amount;
      this.paymentService.postCreditCardDetails(obj).subscribe(response => {
        if (response.valid === true) {
          this.router.navigateByUrl('/paymentSuccessful');
        }
      });
    }
  }


}
