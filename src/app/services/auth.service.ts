import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../environments/appsettings';
import { AuthResponseType, AuthUser } from '../types/AuthResponseDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = `${environment.apiUrl}/auth/login`;

  constructor(private http: HttpClient) {}
  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  User$ = this.userSubject.asObservable();

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string) {
    return this.http
      .post<AuthResponseType>(this.apiUrl, { username, password })
      .pipe(
        tap((res: AuthResponseType) => {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          this.userSubject.next(
            new AuthUser(
              res.id,
              res.username,
              res.email,
              res.firstName,
              res.lastName,
              res.gender,
              res.image,
              res.accessToken,
              res.refreshToken
            )
          );
        }),
        catchError((err) => {
          console.error('Login error:', err);
          return throwError(() => err); // throwError needs to be called like this in latest RxJS
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.userSubject.next(null);
  }
}
