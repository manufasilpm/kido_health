import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCreationComponent } from './child-creation.component';

describe('ChildCreationComponent', () => {
  let component: ChildCreationComponent;
  let fixture: ComponentFixture<ChildCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
