import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IEntrepreneur } from '../../types/entrepreneur';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(
    private router: Router,
    private user: UserService   // ⚠️ certifique-se que tem @Injectable({ providedIn: 'root' })
  ) {}

  register(entrepreneur: IEntrepreneur): Observable<IEntrepreneur> {
    const userId = this.user.getUserData()?._doc?._id;
    return this.http.post<IEntrepreneur>(
      `http://localhost:3000/entrepreneur/register/${userId}`, // ⚠️ sem ":"
      entrepreneur
    );
  }
}
