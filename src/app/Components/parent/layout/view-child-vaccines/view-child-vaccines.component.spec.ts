import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildVaccinesComponent } from './view-child-vaccines.component';

describe('ViewChildVaccinesComponent', () => {
  let component: ViewChildVaccinesComponent;
  let fixture: ComponentFixture<ViewChildVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildVaccinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
