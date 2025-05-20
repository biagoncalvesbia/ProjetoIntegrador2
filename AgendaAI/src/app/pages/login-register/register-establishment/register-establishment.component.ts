import { Component, inject, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { entrepreneurService } from '../../../services/user/entrepreneur/entrepreneur.service';
import { IEntrepreneur} from '../../../types/entrepreneur';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register-establishment',
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register-establishment.component.html',
  styleUrl: './register-establishment.component.css'
})
export class RegisterEstablishmentComponent implements OnInit{
  public entrepreneurRegisterForm!: FormGroup;
  constructor(private entrepreneurService:entrepreneurService, private fb: FormBuilder, private router: Router) { } 

  ngOnInit(): void {
    this.entrepreneurRegisterForm = this.fb.group({
      name: ['', Validators.required],
      endereco: ['', Validators.required],
      cep: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      Horario: ['', Validators.required],
      Tipos_atendimentos: ['', Validators.required],
      Funciona_finaldesemana: ['', Validators.required],
      password:['', Validators.required],
      confpass: ['', Validators.required],
    })
  }

  async registerEntrepreneur() {
    if(this.entrepreneurRegisterForm.valid) {
      const entrepreneur: IEntrepreneur = this.entrepreneurRegisterForm.value
      try {
         this.entrepreneurService.register(entrepreneur).subscribe({
          next: (data) => {
            console.log('Empresa registrada', data)
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