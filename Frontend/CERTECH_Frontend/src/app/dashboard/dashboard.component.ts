import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { EventoService } from '../servicios/evento.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
  constructor(private router: Router, private eventoService: EventoService) {}
  eventos: any[] = []
  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos();
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
    agregarEvento(){
      this.router.navigate(['/eventos/formenevt']);
    }
   
    redirigirDetalle() {
      this.router.navigate(['/eventos/usuarios']);
    }
  }
