import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {
  nuevoEvento: any = {
    nombre_evento: '',
    tipo_evento: '',
    descripcion_evento: '',
    portada: '', // Cambiando el tipo de la portada a string para aceptar la URL
    logo: null // Agregar una propiedad para almacenar el archivo del logo
  };

  constructor(private router: Router, private eventoService: EventoService) {}

  mostrarEventos() {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion() {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas() {
    this.router.navigate(['/firmas']);
  }

  cancelar() {
    this.router.navigate(['/dashboard']);
  }

  agregarEvento(): void {
    this.eventoService.createEvento(this.nuevoEvento).subscribe(
      (response) => {
        console.log('Evento creado:', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al agregar evento:', error);
      }
    );
  }

  onPortadaSelected(event: any): void {
    const file = event.target.files[0];
    this.nuevoEvento.portada = file; // Asignar el archivo seleccionado a la propiedad de la portada
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    this.nuevoEvento.logo = file; // Asignar el archivo seleccionado a la propiedad del logo
  }
}