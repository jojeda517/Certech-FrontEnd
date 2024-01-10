import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements AfterViewInit {
  isEditing: boolean = false;
  nuevoEvento: any = {
    nombre_evento: '',
    tipo_evento: '',
    descripcion_evento: '',
    portada: null as File | null,
    logo: null as File | null
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private eventoService: EventoService
  ) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      this.isEditing = params['idEvento'] !== undefined;

      const h1Element = document.querySelector('.bienvenido h1');
      if (h1Element) {
        h1Element.textContent = this.isEditing ? 'Editar Evento' : 'Agregar Evento';
      }

      if (this.isEditing) {
        const idEvento = params['idEvento'];

        // Lógica para cargar los datos del evento al editar
        this.eventoService.getEventos(idEvento).subscribe(
          (data) => {
            if (data && data.evento) {
              this.nuevoEvento = data.evento;
            } else {
              console.error('La respuesta del servicio no tiene la estructura esperada.');
            }
          },
          (error) => {
            console.error('Error al obtener evento por ID:', error);
          }
        );
      }
    });
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

  cancelar() {
    this.router.navigate(['/dashboard']);
  }

  agregarOEditarEvento(): void {
    const formData = new FormData();
    formData.append('nombre_evento', this.nuevoEvento.nombre_evento);
    formData.append('tipo_evento', this.nuevoEvento.tipo_evento);
    formData.append('descripcion_evento', this.nuevoEvento.descripcion_evento);
    formData.append('portada', this.nuevoEvento.portada as File, 'nombre_archivo_portada.jpg');
    formData.append('logo', this.nuevoEvento.logo as File, 'nombre_archivo_logo.jpg');

    if (this.isEditing) {
      // Lógica para editar el evento existente
      this.editarEvento(formData);
    } else {
      // Lógica para agregar un nuevo evento
      this.agregarEvento(formData);
    }
  }

  private agregarEvento(formData: FormData): void {
    this.eventoService.createEvento(formData).subscribe(
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

  private editarEvento(formData: FormData): void {
    const idEvento = 'obtenerElIdDelEventoAEditar'; // Reemplaza esto con la lógica para obtener el ID del evento a editar
    this.eventoService.actualizarEvento(idEvento, formData).subscribe(
      (response) => {
        console.log('Evento editado:', response);
        // Manejar la respuesta del backend aquí
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al editar evento:', error);
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
