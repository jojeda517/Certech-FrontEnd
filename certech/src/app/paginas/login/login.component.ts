import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
