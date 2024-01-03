import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
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
