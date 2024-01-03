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
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          if (response && response.isAuthenticated) {
            // Usuario autenticado correctamente
            this.router.navigate(['/dashboard']); // Redirigir a la página de dashboard
          } else {
            // Autenticación fallida
            alert('Usuario o contraseña incorrectos');
          }
        },
        (error) => {
          // Manejo de errores
          console.error('Error al iniciar sesión:', error);
          alert('Error al iniciar sesión. Por favor, intenta nuevamente.');
        }
      );
  }
}