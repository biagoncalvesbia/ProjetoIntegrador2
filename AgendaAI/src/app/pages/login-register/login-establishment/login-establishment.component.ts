import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { EntrepreneurService } from '../../../services/user/entrepreneur/entrepreneur.service';
import {  FormGroup,  FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ILoginEntrepreneur } from '../../../types/LoginEntrepreneur';
import type { IEntrepreneur } from '../../../types/entrepreneur';
import { FooterComponent } from "../../footer/footer.component";
@Component({
  selector: 'app-login-establishment',
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, NgIf, FooterComponent],
  templateUrl: './login-establishment.component.html',
  styleUrl: './login-establishment.component.css'
})
export class LoginEstablishmentComponent implements OnInit {
  public entrepreneurLoginForm!: FormGroup;
  constructor(private entrepreneurService: EntrepreneurService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.entrepreneurLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async loginEstablishment() {
    if(this.entrepreneurLoginForm.valid) {
      const entrepreneur: IEntrepreneur = this.entrepreneurLoginForm.value
      console.log(entrepreneur)
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
 


