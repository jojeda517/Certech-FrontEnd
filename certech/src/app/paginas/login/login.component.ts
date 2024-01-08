import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const url = 'http://34.125.254.116:8000/api/administrador/' + this.usuario + '/' + this.clave + '/';
    
    console.log('URL de solicitud:', url); // Verifica que la URL sea la correcta

    this.http.get(url)
      .subscribe(
        (data: any) => {
          console.log('Datos recibidos:', data); // Verifica los datos recibidos del backend

          // Por ejemplo, si el inicio de sesión es exitoso, redirige al dashboard
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          window.alert("datos incorrectos")
          this.recargarPagina()
          console.error('Error en la solicitud:', error); // Manejo de errores

          // Puedes agregar más lógica para manejar diferentes tipos de errores
        }
      );
  }
  recargarPagina(): void {
    setTimeout(() => {
      window.location.reload();
    }, 2000); // 2000 milisegundos (2 segundos)
  }
}


