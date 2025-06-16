import { Component } from '@angular/core';
import { NavBarComponent } from "../pages/nav-bar/nav-bar.component";
import { FooterComponent } from "../pages/footer/footer.component";

@Component({
  selector: 'app-perfil',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
