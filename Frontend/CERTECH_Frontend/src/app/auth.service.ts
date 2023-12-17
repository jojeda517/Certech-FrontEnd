import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  constructor(private router: Router){}
  isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Lógica de autenticación (compara con credenciales reales o realiza la autenticación de acuerdo a tu implementación)
    const isAuthenticated = username === "usuario" && password === "contraseña";
    
    if (isAuthenticated) {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
  
    }

    return isAuthenticated;
  }
  logout(): void {
    // Lógica de cierre de sesión
    this.isLoggedIn = false;
  }
}