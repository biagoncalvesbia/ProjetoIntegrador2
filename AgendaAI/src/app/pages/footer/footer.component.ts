import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ContatosComponent } from '../contatos/contatos.component';
import { SobreComponent } from '../sobre/sobre.component';
import { EquipeComponent } from '../equipe/equipe.component';
@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, ContatosComponent, SobreComponent, EquipeComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
