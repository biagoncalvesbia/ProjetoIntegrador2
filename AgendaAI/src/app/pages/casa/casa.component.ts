import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RegisterEstablishmentComponent } from '../login-register/register-establishment/register-establishment.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CardcasaComponent } from '../cardcasa/cardcasa.component';
import { PlanosComponent } from '../planos/planos.component';

@Component({
  selector: 'app-casa',
  imports: [NavBarComponent, RegisterEstablishmentComponent, RouterLink, RouterLinkActive, CardcasaComponent, PlanosComponent],
  templateUrl: './casa.component.html',
  standalone: true,
  styleUrl: './casa.component.css'
})
export class CasaComponent {

}
