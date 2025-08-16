import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import{ RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-equipe',
  imports: [  RouterLink, RouterLinkActive, RodapeComponent],
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  standalone: true
})
export class EquipeComponent {

}
