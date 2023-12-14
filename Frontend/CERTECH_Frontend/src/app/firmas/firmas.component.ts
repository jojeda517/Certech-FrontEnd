import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firmas',
  standalone: true,
  imports: [],
  templateUrl: './firmas.component.html',
  styleUrl: './firmas.component.css'
})
export class FirmasComponent {
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
