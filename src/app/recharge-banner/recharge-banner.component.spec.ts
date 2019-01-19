import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeBannerComponent } from './recharge-banner.component';

describe('RechargeBannerComponent', () => {
  let component: RechargeBannerComponent;
  let fixture: ComponentFixture<RechargeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
