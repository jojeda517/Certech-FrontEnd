import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Validación simple para campos de usuario y contraseña
    if (this.usuario && this.clave) {
      this.authService.login(this.usuario ,this.clave).subscribe(
        response => {
          // Manejar la respuesta del servicio
          if (response && response.administrador) {
            const administrador = response.administrador;
            console.log('Inicio de sesión exitoso:', administrador);
  
            // Puedes almacenar la información del administrador en el estado de tu aplicación
            // o en algún servicio para su posterior uso.
          } else {
            console.error('Respuesta del servidor no válida.');
          }
        },
        error => {
          // Manejar el error del inicio de sesión
          console.error('Error en el inicio de sesión:', error);
        }
      );
    } else {
      console.error('Ingrese usuario y contraseña');
    }
  }
}