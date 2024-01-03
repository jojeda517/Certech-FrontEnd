import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {
  constructor(private router:Router,private eventoService: EventoService){}
  nomevent: string= "";
  tipo: string= "";
  descripcion: string= "";
  portada: File | null = null;
  imagenFile: File | null = null;

  onFileSelected(event: any): void {
    this.imagenFile = event.target.files[0];
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

    cancelar(){
      this.router.navigate(['/dashboard']);
    }

  guardarEvento(): void {
    if (this.portada) {
      const nuevoEvento = {
        nombre_evento: this.nomevent,
        tipo_evento: this.tipo,
        descripcion_evento: this.descripcion,
        portada: this.portada,
        logo: null // Ajustar según tus necesidades
      };

      this.eventoService.createEvento(nuevoEvento).subscribe(
        (response) => {
          console.log('Evento creado:', response);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Error al crear evento:', error);
          // Manejar errores si es necesario
        }
      );
    } else {
      console.error('No se ha seleccionado una imagen para la portada.');
      // Manejar si no se ha seleccionado una imagen
    }
  }
  
  
}
