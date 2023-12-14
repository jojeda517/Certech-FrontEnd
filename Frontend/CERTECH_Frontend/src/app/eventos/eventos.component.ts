import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
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
