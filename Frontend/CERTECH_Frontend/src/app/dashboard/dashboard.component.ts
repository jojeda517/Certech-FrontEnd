import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}
  cards(){
    this.router.navigate(['/eventos/usuarios']);
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
    eventos: any[] = [
      {
        titulo: 'Evento 1',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '../../assets/images/1x/e.png'
      },
      {
        titulo: 'Evento 2',
        descripcion: 'Otra descripción interesante.',
        imagen: '../../assets/images/1x/e.png'
      },
      // Agrega más eventos según sea necesario
    ];
  }
