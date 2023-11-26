import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewBookingsComponent } from './view-bookings.component';

describe('ViewBookingsComponent', () => {
  let component: HospitalViewBookingsComponent;
  let fixture: ComponentFixture<HospitalViewBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalViewBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalViewBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
