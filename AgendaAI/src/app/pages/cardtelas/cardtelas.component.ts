import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CasaComponent } from '../casa/casa.component';
import { NavComponent } from "../navbar/nav/nav.component";

@Component({
  selector: 'app-cardtelas',
  imports: [RouterLink, RouterLinkActive, CasaComponent, NavComponent],
  templateUrl: './cardtelas.component.html',
  styleUrl: './cardtelas.component.css'
})
export class CardtelasComponent {

}
