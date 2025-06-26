import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContatoComponent } from '../contato/contato.component';
import { SobreComponent } from '../sobre/sobre.component';
import { EquipeComponent } from '../equipe/equipe.component';
@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, ContatoComponent, SobreComponent, EquipeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
