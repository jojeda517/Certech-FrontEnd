import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    portada: null as File | null, // Cambiando el tipo de la portada a string para aceptar la URL
    logo: null as File | null // Agregar una propiedad para almacenar el archivo del logo
  };

  constructor(private router: Router, private http: HttpClient) {}

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

  agregarEvento() {
    const formData = new FormData();
    formData.append('nombre_evento', this.nuevoEvento.nombre_evento);
    formData.append('tipo_evento', this.nuevoEvento.tipo_evento);
    formData.append('descripcion_evento', this.nuevoEvento.descripcion_evento);
    formData.append('portada', this.nuevoEvento.portada as File, 'nombre_archivo_portada.jpg');
    formData.append('logo', this.nuevoEvento.logo as File, 'nombre_archivo_logo.jpg');

    this.http.post<any>('http://127.0.0.1:8000/api/evento/', formData).subscribe(
      (response) => {
        console.log('Evento creado:', response);
        // Manejar la respuesta del backend aquí
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al crear evento:', error);
        // Manejar errores aquí
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
