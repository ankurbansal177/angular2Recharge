import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeSelectorComponent } from './recharge-selector.component';

describe('RechargeSelectorComponent', () => {
  let component: RechargeSelectorComponent;
  let fixture: ComponentFixture<RechargeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
