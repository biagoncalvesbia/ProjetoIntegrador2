import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import {  FormGroup,  FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ILogin } from '../../../types/Login';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login-user',
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent implements OnInit {
  public userLoginForm!: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async loginUser() {
    if(this.userLoginForm.valid) {
      const user: ILogin = this.userLoginForm.value
      try {
        const response = this.userService.authenticate(user)
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log("Deu ruim")
    }
  }
}
