import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firmas',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './firmas.component.html',
  styleUrl: './firmas.component.css'
})
export class FirmasComponent {
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

    firmas: any[] = [
      { cedula: '1926483597', nombre: 'Juan Pérez', correo: 'juanperez.com', firma: '../../../assets/images/1x/firma.png' },
      { cedula: '1926483598', nombre: 'Pedro González', correo: 'pedrogonzalez.com', firma: '../../../assets/images/1x/firma.png' },
      { cedula: '1926483599', nombre: 'María López', correo: 'marialopez.com', firma: '../../../assets/images/1x/firma.png' },
      { cedula: '1850089952', nombre: 'María López', correo: 'marialopez.com', firma: '../../../assets/images/1x/firma.png' },
      // Agrega más firmas según sea necesario
    ];
}
