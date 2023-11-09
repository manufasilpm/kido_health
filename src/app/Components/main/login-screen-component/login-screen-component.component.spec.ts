import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenComponentComponent } from './login-screen-component.component';

describe('LoginScreenComponentComponent', () => {
  let component: LoginScreenComponentComponent;
  let fixture: ComponentFixture<LoginScreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginScreenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
