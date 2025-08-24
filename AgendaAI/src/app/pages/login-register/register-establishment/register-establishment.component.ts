import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { RouterLink, RouterLinkActive, Router } from "@angular/router";
import { EntrepreneurService } from "../../../services/entrepreneur/entrepreneur.service";
import { IEntrepreneur } from "../../../types/entrepreneur";
import { RodapeComponent } from "../../rodape/rodape.component";

@Component({
  selector: 'app-register-establishment',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RodapeComponent   // add if you use <app-rodape>
  ],
  templateUrl: './register-establishment.component.html',
  styleUrls: ['./register-establishment.component.css'] // ✅ fixed
})
export class RegisterEstablishmentComponent implements OnInit {
  public entrepreneurRegisterForm!: FormGroup;

  constructor(
    private entrepreneurService: EntrepreneurService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.entrepreneurRegisterForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      comple: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  async registerEntrepreneur() {
    if (this.entrepreneurRegisterForm.valid) {
      const entrepreneur: IEntrepreneur = this.entrepreneurRegisterForm.value;
      this.entrepreneurService.register(entrepreneur).subscribe({
        next: (data) => {
          console.log('Empresa registrada', data);
          this.router.navigate(['/']);
        },
        error: (error) => console.log(error),
      });
    } else {
      console.log('Tem alguma coisa de errado');
    }
  }
}
