import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  showLoginButton = true;

  constructor(private router: Router, private route: ActivatedRoute, public authService: AuthService) {}
  @Output() eventosClick = new EventEmitter<void>();
  @Output() validacionClick = new EventEmitter<void>();
  @Output() firmasClick = new EventEmitter<void>();

  mostrarVentana(opcion: string): void {
    switch (opcion) {
      case 'eventos':
        this.eventosClick.emit();
        break;
      case 'validacion':
        this.validacionClick.emit();
        break;
      case 'firmas':
        this.firmasClick.emit();
        break;
      default:
        break;
    }
  }
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  cerrarSesion(): void {
    // Redirige a la ruta '/login'
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}