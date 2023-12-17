import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { LoginService } from '../servicios/login.service'; 
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showLoginButton = true;

  constructor(private router: Router, private route: ActivatedRoute, public authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica la ruta actual para ocultar el botón en el componente Login
        this.showLoginButton = !this.route.snapshot.url.join('').includes('login');
      }
    });
  }
  mostrarLogin(): void {
    // Redirige a la ruta '/login'
    this.router.navigate(['/login']);
  }
  cerrarSesion(): void {
    // Redirige a la ruta '/login'
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}