import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-senha',
  imports: [HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './senha.component.html',
  styleUrl: './senha.component.css'
})
export class SenhaComponent {

}
