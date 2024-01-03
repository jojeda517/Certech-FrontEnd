import { Component,OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  showLoginButton = true;

  constructor(private router: Router, private route: ActivatedRoute, public authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
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
}