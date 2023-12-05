import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


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

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    // Lógica de autenticación (puede conectarse a un servicio, etc.)
    // Por ahora, simplemente marcamos al usuario como autenticado.
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.loginService.setLoggedIn(true);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}