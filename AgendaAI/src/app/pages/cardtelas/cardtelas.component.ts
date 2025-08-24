import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CasaComponent } from '../casa/casa.component';


@Component({
  selector: 'app-cardtelas',
  imports: [RouterLink, RouterLinkActive, CasaComponent],
  templateUrl: './cardtelas.component.html',
  styleUrl: './cardtelas.component.css'
})
export class CardtelasComponent {

}
