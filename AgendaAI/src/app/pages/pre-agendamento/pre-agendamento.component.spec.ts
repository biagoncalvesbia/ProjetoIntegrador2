import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAgendamentoComponent } from './pre-agendamento.component';

describe('PreAgendamentoComponent', () => {
  let component: PreAgendamentoComponent;
  let fixture: ComponentFixture<PreAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
