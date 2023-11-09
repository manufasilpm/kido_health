import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsignupComponent } from './hospitalsignup.component';

describe('HospitalsignupComponent', () => {
  let component: HospitalsignupComponent;
  let fixture: ComponentFixture<HospitalsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
