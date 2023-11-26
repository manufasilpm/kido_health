import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVaccinationComponent } from './request-vaccination.component';

describe('RequestVaccinationComponent', () => {
  let component: RequestVaccinationComponent;
  let fixture: ComponentFixture<RequestVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestVaccinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
