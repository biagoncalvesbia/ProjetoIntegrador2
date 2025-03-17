import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { BaseboardComponent } from "../baseboard/baseboard.component";
import { CardComponent } from "../card/card.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, BaseboardComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
