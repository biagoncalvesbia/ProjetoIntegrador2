import { EntrepreneurService } from '../../services/entrepreneur/entrepreneur.service';
import { Component, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, NgIf ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true
})
export class NavBarComponent implements OnInit {
  public logged: any = {}
  public name: string = ''
  dropdownOpen = false
  public primary_letter: string = ''
  constructor(private userService: UserService, private entrepreneurService: EntrepreneurService, private router: Router) {}

  ngOnInit(): void {
    this.logged = this.userService.getUserData() || this.entrepreneurService.getUserData()
    this.name = this.logged?._doc?.name
    this.primary_letter = this.name ? this.name.charAt(0) : ''
    console.log(this.primary_letter)
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  perfil() {
    console.log('perfil');
  }

  config() {
    console.log('config');
  }

  logout() {
    this.userService.logout();
    this.entrepreneurService.logout();
    console.log('Usuário deslogado');
    window.location.reload()
  }
}
