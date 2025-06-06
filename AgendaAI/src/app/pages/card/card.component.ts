import { Component, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { CommonModule, NgIf } from '@angular/common';
import { EntrepreneurService } from '../../services/user/entrepreneur/entrepreneur.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, NgIf, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  public logged: any = {}
  
  constructor(private userService: UserService, private entrepreneurService: EntrepreneurService){}

  ngOnInit(): void {
    this.logged = this.userService.getUserData() || this.entrepreneurService.getUserData()
  }
}
