import { Component } from '@angular/core';
import { NavBarComponent } from "../navbar/nav-bar/nav-bar.component";
import { CardComponent } from '../card/card.component';
import { RodapeComponent } from '../rodape/rodape.component';



@Component({
  selector: 'app-home',
  imports: [NavBarComponent, CardComponent,RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

}
