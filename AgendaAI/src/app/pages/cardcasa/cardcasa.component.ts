import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router} from '@angular/router';
import { RegisterEstablishmentComponent } from '../login-register/register-establishment/register-establishment.component';

@Component({
  selector: 'app-cardcasa',
  imports: [RouterLink, RouterLinkActive, RegisterEstablishmentComponent],
  templateUrl: './cardcasa.component.html',
  styleUrl: './cardcasa.component.css'
})
export class CardcasaComponent {

}
