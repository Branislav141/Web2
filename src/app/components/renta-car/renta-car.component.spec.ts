import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaCarComponent } from './renta-car.component';

describe('RentaCarComponent', () => {
  let component: RentaCarComponent;
  let fixture: ComponentFixture<RentaCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
