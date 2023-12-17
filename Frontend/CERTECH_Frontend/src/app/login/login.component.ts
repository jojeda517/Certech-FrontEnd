import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = ''; // Inicializar con cadena vacía
  password: string = ''; // Inicializar con cadena vacía

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);
    

    if (!isAuthenticated) {
      alert('Usuario o contraseña incorrectos');
    }
  }
}