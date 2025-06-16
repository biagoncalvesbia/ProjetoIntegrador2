import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
