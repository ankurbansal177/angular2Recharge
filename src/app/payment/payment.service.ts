import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PaymentType} from '../PaymentType';
import {CreditCard} from '../CreditCard';
import {NetBanking} from '../NetBanking';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PaymentService {
    bankUrl = '/api/banks';  // URL to web api
    creditCardValidation = '/api/creditcard';
    netBankingValidation = '/api/netbanking';
    socket;
  constructor(private http: HttpClient) {
  }

  /** GET options from the server */
  getBankOptions (): Observable<PaymentType[]> {
    return this.http.get<PaymentType[]>(this.bankUrl);
  }
  postCreditCardDetails (creditCard: CreditCard): Observable<any> {
    return this.http.post(this.creditCardValidation, creditCard);
  }
  postNetBankingDetails (netBankingDetails: NetBanking): Observable<any> {
    return this.http.post(this.netBankingValidation, netBankingDetails);
  }
}
