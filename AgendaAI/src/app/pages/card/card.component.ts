import { Component, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user/user.service';
@Component({
  selector: 'app-card',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  public logged: any = {}
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.logged = this.userService.getUserData()
    console.log(this.logged)
  }
}
