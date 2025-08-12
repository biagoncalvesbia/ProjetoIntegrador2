import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcasaComponent } from './cardcasa.component';

describe('CardcasaComponent', () => {
  let component: CardcasaComponent;
  let fixture: ComponentFixture<CardcasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardcasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
