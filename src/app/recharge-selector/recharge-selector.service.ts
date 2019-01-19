import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';


import { Observable } from 'rxjs';

import { RechargeBanner } from '../RechargeBanner';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class RechargeSelectorService {
    rechargeUrl = 'http://127.0.0.1:3000';  // URL to web api
    socket;
  constructor(private http: HttpClient) {
  }

  /** GET options from the server */
  getRechargeOptions (): Observable<RechargeBanner[]> {
    return this.http.get<RechargeBanner[]>(this.rechargeUrl);
  }

  getMessages() {
    const observable = new Observable<RechargeBanner[]>(observer => {
      this.socket = io(this.rechargeUrl, {
        transports: ['websocket']
      });
      this.socket.on('priceData', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
