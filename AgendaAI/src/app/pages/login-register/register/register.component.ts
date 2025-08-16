import { Component, inject, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { IUser } from '../../../types/User';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgIf } from '@angular/common';
import { LoginUserComponent } from '../login-user/login-user.component';
import { RodapeComponent } from '../../rodape/rodape.component';


@Component({
  selector: 'app-register',
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, NgIf, LoginUserComponent, RodapeComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})


export class RegisterComponent implements OnInit{
  public userRegisterForm!: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { } 

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
    })
  }

  async registerUser() {
    if(this.userRegisterForm.valid) {
      const user: IUser = this.userRegisterForm.value
      try {
         this.userService.register(user).subscribe({
          next: (data) => {
            console.log('Usuario registrado', data)
            this.router.navigate(['/', '/'])
          },
          error: (error) => console.log(error)
        })
      } catch (error) {
        console.error('Erro ao registrar usuário', error);
      }
    } else {
      console.log("Tem alguma coisa de errado");
    }
  }

}
