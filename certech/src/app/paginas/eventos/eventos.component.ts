import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {


  constructor(private router: Router) {
  }

  mostrarEventos() {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion() {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas() {
    this.router.navigate(['/firmas']);
  }
  cargarcsv(){
    this.router.navigate(['/eventos/tabla']);
  }
  mostrarcertificados() {
    this.router.navigate(['/certificados']);
  }
  
}
