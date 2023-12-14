import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  constructor(private router: Router) {}

  mostrarEventos() {
  this.router.navigate(['/eventos']);
  }
  mostrarValidacion() {
    this.router.navigate(['/validacion']);
    }
  mostrarFirmas() {
      this.router.navigate(['/firmas']);
    }
}
