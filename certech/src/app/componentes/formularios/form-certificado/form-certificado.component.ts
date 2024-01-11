import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import { FirmaService } from 'src/app/servicios/firma.service';
import { PlantillaService } from 'src/app/servicios/plantilla.service';

@Component({
  selector: 'app-form-certificado',
  templateUrl: './form-certificado.component.html',
  styleUrls: ['./form-certificado.component.css']
})
export class FormCertificadoComponent implements OnInit {
  eventoSeleccionado: any; // Puedes ajustar el tipo según la estructura de tus datos
  firmas: any[] = [];
  eventos: any[] = [];
  plantillas: any[] = [];
  firma1: any;
  firma2: any;
  plantilla: any;

  constructor(
    private router: Router,
    private firmaService: FirmaService,
    private eventoService: EventoService,
    private plantillaService: PlantillaService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.traerfirmas();
    this.traerEventos();
    this.traerPlantillas();
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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

  guardarEvento(): void {
    this.router.navigate(['/eventos/usuarios/certificado']);
  }

  cancelar(): void {
    this.router.navigate(['/eventos/usuarios']);
  }

  traerfirmas() {
    this.firmaService.obtenerFirmas().subscribe(
      (data: any[]) => {
        this.firmas = Object.values(data);
        console.log('Firmas obtenidas:', this.firmas);
      },
      (error) => {
        console.error('Error al obtener firmas:', error);
      }
    );
  }

  traerEventos() {
    this.eventoService.getEventos().subscribe(
      (data: any[]) => {
        this.eventos = Object.values(data);
        console.log('Eventos obtenidos:', this.eventos);
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
      }
    );
  }

  traerPlantillas() {
    this.plantillaService.obtenerPlantillas().subscribe(
      (data: any[]) => {
        this.plantillas = Object.values(data);
        console.log('Plantillas obtenidas:', this.plantillas);
      },
      (error) => {
        console.error('Error al obtener plantillas:', error);
      }
    );
  }

  seleccionarEvento() {
    console.log('ID del evento seleccionado:', this.eventoSeleccionado.id);
  }

  seleccionarFirma1() {
    console.log('ID de la primera firma seleccionada:', this.firma1);
  }

  seleccionarFirma2() {
    console.log('ID de la segunda firma seleccionada:', this.firma2);
  }

  seleccionarPlantilla() {
    console.log('ID de la plantilla seleccionada:', this.plantilla);
  }
  seleccionarPlantillavista() {
    console.log('ID de la plantilla seleccionada:', this.plantilla);
  }
  
}