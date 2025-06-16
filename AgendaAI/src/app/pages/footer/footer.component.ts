import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ContatosComponent } from '../contatos/contatos.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, ContatosComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
