import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../servicios/evento.service';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  eventos: any[] = [];

  constructor(private router: Router, private eventoService: EventoService) {}

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (response) => {
        if (response && response.eventos) {
          this.eventos = response.eventos;
        }
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
        // Manejar errores si es necesario
      }
    );
  }

  mostrarEventos(): void {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion(): void {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas(): void {
    this.router.navigate(['/firmas']);
  }

  agregarEvento(): void {
    this.router.navigate(['/eventos/formenevt']);
  }

  redirigirDetalle(): void {
    this.router.navigate(['/eventos/usuarios']);
  }
}
