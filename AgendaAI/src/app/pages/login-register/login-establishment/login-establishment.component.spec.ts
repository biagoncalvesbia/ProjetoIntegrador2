import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEstablishmentComponent } from './login-establishment.component';

describe('LoginEstablishmentComponent', () => {
  let component: LoginEstablishmentComponent;
  let fixture: ComponentFixture<LoginEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEstablishmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
