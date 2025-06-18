import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfUserComponent } from './conf-user.component';

describe('ConfUserComponent', () => {
  let component: ConfUserComponent;
  let fixture: ComponentFixture<ConfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
