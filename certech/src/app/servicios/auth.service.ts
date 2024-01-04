
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://34.125.254.116:8000/api/administrador/';
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(usuario: string, clave: string): Observable<any> {
    const loginData = { usuario, clave };
    return this.http.post<any>(`${this.apiUrl}${usuario}/${clave}/`, {});
  }
  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}