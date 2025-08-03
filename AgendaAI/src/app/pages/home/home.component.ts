import { Component } from '@angular/core';
import { NavBarComponent } from "../../pages/nav-bar/nav-bar.component";
import { CardComponent } from '../card/card.component';
import { FooterComponent } from "../../pages/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

}
