import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPopUpComponent } from './booking-pop-up.component';

describe('BookingPopUpComponent', () => {
  let component: BookingPopUpComponent;
  let fixture: ComponentFixture<BookingPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
