import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cardcasa',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],  
  templateUrl: './cardcasa.component.html',
  styleUrls: ['./cardcasa.component.css']    
})
export class CardcasaComponent {}
