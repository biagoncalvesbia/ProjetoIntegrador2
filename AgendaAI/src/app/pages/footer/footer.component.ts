import { Component } from '@angular/core';
import { SobreComponent } from '../sobre/sobre.component';
import { EquipeComponent } from '../equipe/equipe.component';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-footer',
  imports: [SobreComponent, EquipeComponent, RouterLink, RouterLinkActive, ContatoComponent],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
