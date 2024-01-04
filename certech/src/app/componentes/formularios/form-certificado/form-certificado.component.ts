import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-certificado',
  templateUrl: './form-certificado.component.html',
  styleUrls: ['./form-certificado.component.css']
})
export class FormCertificadoComponent {

  constructor(private router: Router) {}

  nombre: string = '';
  evento: string = '';
  fechainicio: string = '';
  tiempo: string = '';
  responsablenombre: string = '';
  responsablecargo: string = '';
  firma: string = '';

  mostrarEventos() {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion() {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas() {
    this.router.navigate(['/firmas']);
  }

  guardarEvento(): void {
    this.router.navigate(['/eventos/usuarios/certificado']);
  }

  cancelar(): void {
    this.router.navigate(['/eventos/usuarios']);
  }
}