import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from "../navbar/nav-bar/nav-bar.component";
import { AgendamentoComponent } from '../agendamento/agendamento.component';

@Component({
  selector: 'app-pre-agendamento',
  imports: [RouterLink, RouterLinkActive, NavBarComponent, AgendamentoComponent],
  templateUrl: './pre-agendamento.component.html',
  styleUrl: './pre-agendamento.component.css',
  standalone: true
})
export class PreAgendamentoComponent {

}
