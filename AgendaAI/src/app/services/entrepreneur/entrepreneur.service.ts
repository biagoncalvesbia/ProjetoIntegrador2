import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IEntrepreneur } from '../../types/entrepreneur';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ILoginEntrepreneur } from '../../types/LoginEntrepreneur';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {
  private http = inject(HttpClient);
  public entrepreneurLogged: any = null;
  isAuthenticated: boolean = false;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(private router: Router) {
    this.checkAuthentication();
  }

  // Verifica se o usuário está logado
  private checkAuthentication(): void {
  if (!this.isBrowser) return;

  const entrepreneurLoggedData = localStorage.getItem('entrepreneur_logged');
  if (entrepreneurLoggedData !== null) {
    this.entrepreneurLogged = JSON.parse(entrepreneurLoggedData);
    this.isAuthenticated = true;
  } else {
    this.isAuthenticated = false;
  }
}

  // Registro de novo usuário
   register(entrepreneur: IEntrepreneur): Observable<IEntrepreneur>{
    const response = this.http.post<IEntrepreneur>('http://localhost:3000/entrepreneur/register', entrepreneur);
    return response
  }

  // Autenticação de usuário
  authenticate(entrepreneur: IEntrepreneur): Observable<any> {
    const observable = this.http.post<IEntrepreneur>('http://localhost:3000/entrepreneur/login', entrepreneur);
  
    observable.subscribe({
      next: (response) => {
        if (response && this.isBrowser) {
          localStorage.setItem('entrepreneur_logged', JSON.stringify(response));
          this.entrepreneurLogged = response;
          this.isAuthenticated = true;
          this.router.navigate(['/', '/'])
        }
      },
      error: (err) => {
        console.error('Erro ao autenticar:', err);
        this.isAuthenticated = false;
      }
    });
  
    return observable;
  }

  // Obtém os dados do usuário logado
  getUserData() {
    const entrepreneurLoggedData = localStorage.getItem('entrepreneur_logged');
    if (entrepreneurLoggedData) {
      this.entrepreneurLogged = JSON.parse(entrepreneurLoggedData);
    } else {
      this.entrepreneurLogged = null;
    }
    return this.entrepreneurLogged;
  }

  // Faz logout
  logout(): void {
    localStorage.removeItem('entrepreneur_logged');
    this.entrepreneurLogged = null;
    this.isAuthenticated = false;
  }
}