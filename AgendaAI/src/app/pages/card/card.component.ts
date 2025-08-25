import { Component, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommonModule, NgIf } from '@angular/common';
import { EntrepreneurService } from '../../services/entrepreneur/entrepreneur.service';
import { RegisterComponent } from '../../pages/login-register/register/register.component';
import { AgendamentoComponent } from '../../pages/agendamento/agendamento.component';
import { PreAgendamentoComponent } from '../../pages/pre-agendamento/pre-agendamento.component';
import { PainelAdmComponent } from '../ADM/painel-adm/painel-adm.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, NgIf, CommonModule, RegisterComponent, PreAgendamentoComponent, AgendamentoComponent, PainelAdmComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  public logged: any = {}
  
  constructor(private userService: UserService, private entrepreneurService: EntrepreneurService){}

  ngOnInit(): void {
    this.logged = this.userService.getUserData() 
  }
}
