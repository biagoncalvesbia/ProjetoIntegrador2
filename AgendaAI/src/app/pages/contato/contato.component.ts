import { Component, inject, type OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ContatoService } from '../../services/contato/contato.service';
import { IContato } from '../../types/contato';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms'
import { NgIf } from '@angular/common';
import { NavComponent } from "../navbar/nav/nav.component";
import { ReactiveFormsModule } from '@angular/forms';
import { RodapeComponent } from '../rodape/rodape.component';


@Component({
  selector: 'app-contato',
  imports: [RouterLink, RouterLinkActive, NavComponent, FormsModule, ReactiveFormsModule, NgIf, RodapeComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit {
  public contatoRegisterForm!: FormGroup;
  constructor(private contatoService: ContatoService, private fb: FormBuilder, private router: Router) {}
 
  ngOnInit(): void {
      this.contatoRegisterForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        assunto: ['', Validators.required],
        mensagem: ['', Validators.required],
      })
  }

  async registerContato() {
    if(this.contatoRegisterForm.valid) {
      const contato: IContato = this.contatoRegisterForm.value
      try {
        this.contatoService.register(contato).subscribe({
          next: (data) => {
            console.log('Reclamação enviada', data)
            this.router.navigate(['/', '/'])
          },
          error: (error) => console.log(error)
        })
      } catch (error) {
        console.error('erro ao enviar a mensagem', error);
      }
    } else {
      console.log("tem algo errado");
    }
  }

}
