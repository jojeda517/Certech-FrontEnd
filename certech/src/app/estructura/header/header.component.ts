import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLoginButton = true;

  constructor(private router: Router, private route: ActivatedRoute, public authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Verifica la ruta actual para ocultar el botón en el componente Login
        this.showLoginButton = !this.router.url.includes('/login');
      }
    });
  }

  mostrarLogin(): void {
    // Redirige a la ruta '/login'
    this.router.navigate(['/login']);
  }
  cerrarSesion(): void {
    this.authService.logout(); // Llama al método logout del servicio AuthService
  }
}