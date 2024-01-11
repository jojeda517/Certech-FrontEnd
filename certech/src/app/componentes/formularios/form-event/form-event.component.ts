import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
    private eventoService: EventoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      this.isEditing = params['idEvento'] !== undefined;

      if (this.isEditing) {
        const idEvento = params['idEvento'];

        this.eventoService.getEventos(idEvento).subscribe(
          (data) => {
            if (data && data.evento) {
              this.nuevoEvento = data.evento;
              this.cdr.detectChanges();
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
    this.cdr.detectChanges();
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
    formData.append('portada', this.nuevoEvento.portada as File);
    formData.append('logo', this.nuevoEvento.logo as File);
  
    if (this.isEditing) {
      this.editarEvento(this.nuevoEvento.id_evento, formData);
    } else {
      this.agregarEvento(formData);
    }
  }

  private agregarEvento(formData: FormData): void {
    this.eventoService.createEvento(formData).subscribe(
      (response) => {
        console.log('Evento creado:', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al crear evento:', error);
      }
    );
  }

  private editarEvento(idEvento: string, formData: FormData): void {
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
    this.nuevoEvento.portada = file;
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    this.nuevoEvento.logo = file;
  }
}
