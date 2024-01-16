
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/administrador/admin1/admin1/';
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