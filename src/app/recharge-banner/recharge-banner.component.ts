import {Component, Input, Output, OnChanges, OnInit, EventEmitter} from '@angular/core';
import {RechargeBanner} from '../RechargeBanner';

@Component({
  selector: 'app-recharge-banner',
  templateUrl: './recharge-banner.component.html',
  styleUrls: ['./recharge-banner.component.css']
})
export class RechargeBannerComponent implements OnInit, OnChanges {
  @Input() bannerD: RechargeBanner;
  @Input() selectedBanner: number;
  public selectedCard: boolean;
  @Output()
  toggleComplete: EventEmitter<RechargeBanner> = new EventEmitter();
  onToggleComplete(banner: RechargeBanner) {
    this.toggleComplete.emit(banner);
  }
  constructor() {
  }
  ngOnChanges(changes) {
    console.log(2, changes);
  }

  ngOnInit() {
  }

}
