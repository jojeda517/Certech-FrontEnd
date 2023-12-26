import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports:[NavbarComponent],
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
