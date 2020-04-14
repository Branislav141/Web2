import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijaRentaCarComponent } from './aviokompanija-renta-car.component';

describe('AviokompanijaRentaCarComponent', () => {
  let component: AviokompanijaRentaCarComponent;
  let fixture: ComponentFixture<AviokompanijaRentaCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijaRentaCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijaRentaCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
