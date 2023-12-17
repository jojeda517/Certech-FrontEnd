import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
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
}