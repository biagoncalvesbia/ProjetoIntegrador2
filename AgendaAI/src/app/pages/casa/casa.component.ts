import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { RegisterEstablishmentComponent } from '../login-register/register-establishment/register-establishment.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  imports: [NavBarComponent, RegisterEstablishmentComponent, RouterLink, RouterLinkActive],
  templateUrl: './casa.component.html',
  standalone: true,
  styleUrl: './casa.component.css'
})
export class CasaComponent {

}
