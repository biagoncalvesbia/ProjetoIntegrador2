import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IContato } from '../../types/contato';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private http = inject(HttpClient);

 // Registro de novo usuário
    register(contato: IContato): Observable<IContato>{
   const response = this.http.post<IContato>('http://localhost:3000/contato/register', contato);
   return response
    
  }
}