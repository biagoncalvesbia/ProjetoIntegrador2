import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { IUser } from '../../types/User';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { ILogin } from '../../types/Login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  public userLogged: any = null;
  isAuthenticated: boolean = false;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(private router: Router) {
    this.checkAuthentication();
  }

  // Verifica se o usuário está logado
  private checkAuthentication(): void {
  if (!this.isBrowser) return;

  const userLoggedData = localStorage.getItem('user_logged');
  if (userLoggedData !== null) {
    this.userLogged = JSON.parse(userLoggedData);
    this.isAuthenticated = true;
  } else {
    this.isAuthenticated = false;
  }
}

  // Registro de novo usuário
   register(user: IUser): Observable<IUser>{
    const response = this.http.post<IUser>('http://localhost:3000/user/register', user);
    return response
  }

  // Autenticação de usuário
  authenticate(user: ILogin): Observable<ILogin> {
    const observable = this.http.post<ILogin>('http://localhost:3000/user/login', user);
  
    observable.subscribe({
      next: (response) => {
        if (response && this.isBrowser) {
          localStorage.setItem('user_logged', JSON.stringify(response));
          this.userLogged = response;
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
    const userLoggedData = localStorage.getItem('user_logged');
    if (userLoggedData) {
      this.userLogged = JSON.parse(userLoggedData);
    } else {
      this.userLogged = null;
    }
    return this.userLogged;
  }

  // Faz logout
  logout(): void {
    localStorage.removeItem('user_logged');
    this.userLogged = null;
    this.isAuthenticated = false;
  }
}
