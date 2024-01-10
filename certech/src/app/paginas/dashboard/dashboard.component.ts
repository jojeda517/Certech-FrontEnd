import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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

  mostrarValidacion(): void {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas(): void {
    this.router.navigate(['/firmas']);
  }

  agregarEvento(): void {
    this.router.navigate(['/eventos/formenevt']);
  }
 editarEvento(idEvento: string){
    this.router.navigate(['eventos/formenevtAct',idEvento]);
 }
 eliminarEvento(idEvento: string){

 }
  redirigirDetalle(idEvento: string): void {
    this.router.navigate([`/eventos/usuarios/${idEvento}`]);
  }
  mostrarEventos(): void {
    this.router.navigate(['/dashboard']);
  }
}