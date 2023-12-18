import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';

@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  constructor(private router: Router) {}

  mostrarEventos() {
  this.router.navigate(['/dashboard']);
  }
  mostrarValidacion() {
    this.router.navigate(['/validacion']);
    }
  mostrarFirmas() {
      this.router.navigate(['/firmas']);
    }
}
