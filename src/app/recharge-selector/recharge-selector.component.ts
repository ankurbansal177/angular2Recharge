import {Component, OnChanges, OnInit} from '@angular/core';
import {RechargeBanner} from '../RechargeBanner';
import {RechargeSelectorService} from './recharge-selector.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recharge-selector',
  templateUrl: './recharge-selector.component.html',
  styleUrls: ['./recharge-selector.component.css'],
  providers: [ RechargeSelectorService ]
})
export class RechargeSelectorComponent implements OnInit, OnChanges {
  rechargeOptions: RechargeBanner[] = [];
  selectedPrice: number;
  customPrice: number;
  customSelected: boolean;
  constructor(private rechargeSelectorService: RechargeSelectorService, private router: Router) {
  }
  onToggleRadio($event) {
    console.log($event);
    this.selectedPrice = $event.price;
    this.customPrice = null;
    this.customSelected = false;
  }
  getRechargeOptions(): void {
    // this.rechargeSelectorService.getRechargeOptions().subscribe(options => {
    //   console.log(options);
    //   this.rechargeOptions = options;
    //   console.log(this.rechargeOptions);
    // });
    this.rechargeSelectorService.getMessages().subscribe(response => {
      console.log(response);
      this.rechargeOptions = response;
      const selectedAmount = sessionStorage.getItem('price');
      if (selectedAmount != null) {
        this.selectedPrice = Number(selectedAmount);
      }
    });
  }
  selectCustomPrice($event): void {
    this.customSelected = true;
    this.selectedPrice = this.customPrice;
  }
  ngOnChanges(changes) {
    console.log(2, changes);
  }
  submitForm() {
    if (this.customSelected) {
      this.selectedPrice = this.customPrice;
    }
    console.log('Submitting price ' + this.selectedPrice);
    if (this.selectedPrice) {
      sessionStorage.setItem('price', this.selectedPrice.toString());
      this.router.navigateByUrl('/payment');
    }
  }
  ngOnInit() {
    this.getRechargeOptions();
  }

}
