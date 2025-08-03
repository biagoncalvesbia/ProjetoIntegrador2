import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtelasComponent } from './cardtelas.component';

describe('CardtelasComponent', () => {
  let component: CardtelasComponent;
  let fixture: ComponentFixture<CardtelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardtelasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
