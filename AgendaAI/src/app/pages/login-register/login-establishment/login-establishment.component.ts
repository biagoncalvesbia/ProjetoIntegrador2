import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { entrepreneurService } from '../../../services/user/entrepreneur/entrepreneur.service';
import {  FormGroup,  FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ILoginEntrepreneur } from '../../../types/LoginEntrepreneur';
@Component({
  selector: 'app-login-establishment',
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login-establishment.component.html',
  styleUrl: './login-establishment.component.css'
})
export class LoginEstablishmentComponent implements OnInit {
  public entrepreneurLoginForm!: FormGroup;
  constructor(private entrepreneurService: entrepreneurService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.entrepreneurLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async loginEstablishment() {
    if(this.entrepreneurLoginForm.valid) {
      const entrepreneur: ILoginEntrepreneur = this.entrepreneurLoginForm.value
      try {
        const response = this.entrepreneurService.authenticate(entrepreneur)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log("Deu ruim")
    }
  }
}
 


