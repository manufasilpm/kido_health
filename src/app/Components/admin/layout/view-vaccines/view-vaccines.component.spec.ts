import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHospitalsComponent } from './view-vaccines.component';

describe('ViewBookingsComponent', () => {
  let component: ViewHospitalsComponent;
  let fixture: ComponentFixture<ViewHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHospitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
