import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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