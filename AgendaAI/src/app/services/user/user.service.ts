import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { IUser } from '../../types/User'; // Assuming IUser or ILogin is what's stored
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs'; // Import tap, catchError, of
import type { ILogin } from '../../types/Login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  // Use a more specific type for userLogged
  public userLogged: ILogin | null = null;
  public isAuthenticated: boolean = false;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private router = inject(Router); // Inject router using inject function

  constructor() {
    this.checkAuthentication();
  }

  // Checks if the user is logged in
  private checkAuthentication(): void {
    if (!this.isBrowser) return;

    const userLoggedData = localStorage.getItem('user_logged');
    if (userLoggedData !== null) {
      try {
        this.userLogged = JSON.parse(userLoggedData);
        this.isAuthenticated = true;
      } catch (e) {
        console.error('Error parsing user_logged from localStorage:', e);
        this.clearAuthData(); // Clear corrupted data
      }
    } else {
      this.clearAuthData();
    }
  }

  // Register a new user
  register(user: IUser): Observable<IUser> {
    // Error handling can be added here if needed, or by the subscriber
    return this.http.post<IUser>('http://localhost:3000/user/register', user);
  }

  // Authenticate user
  authenticate(user: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>('http://localhost:3000/user/login', user).pipe(
      tap((response) => {
        if (response && this.isBrowser) {
          localStorage.setItem('user_logged', JSON.stringify(response));
          this.userLogged = response;
          this.isAuthenticated = true;
          this.router.navigate(['/']); // Navigate after successful login
        }
      }),
      catchError((err) => {
        console.error('Error during authentication:', err);
        this.clearAuthData(); // Clear authentication data on error
        // Re-throw or return an observable with an error
        return new Observable<ILogin>(() => {throw new Error(err.message  )})
        // Or if you want to handle it silently and return an empty observable:
        // return of(null as unknown as ILogin); // Cast to ILogin to satisfy type
      })
    );
  }

  // Helper to clear authentication data
  private clearAuthData(): void {
    localStorage.removeItem('user_logged');
    this.userLogged = null;
    this.isAuthenticated = false;
  }

  // Gets the data of the logged-in user
  // This method might become redundant if userLogged is always up-to-date
  // Consider if you really need a public method for this, or if accessing userLogged directly is enough
  getUserData(): ILogin | null {
    // Ensure userLogged is current (though checkAuthentication and authenticate should handle this)
    if (this.userLogged) {
      return this.userLogged;
    }
    // If somehow userLogged is null but localStorage has data (e.g., direct call), re-check
    this.checkAuthentication();
    return this.userLogged;
  }

  // Logs out
  logout(): void {
    this.clearAuthData();
    this.router.navigate(['/login']); // Navigate to login page after logout
  }
}