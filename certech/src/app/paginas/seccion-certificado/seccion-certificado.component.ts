import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PlantillaService } from 'src/app/servicios/plantilla.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-seccion-certificado',
  templateUrl: './seccion-certificado.component.html',
  styleUrls: ['./seccion-certificado.component.css']
})
export class SeccionCertificadoComponent implements OnInit {
  plantillas: any[] = [];
  constructor(
    private router: Router, 
    private location: Location,
    private plantillaService: PlantillaService,
    private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
      this.obtenerPlantillas();
    }
  
    obtenerPlantillas(): void {
      this.plantillaService.obtenerPlantillas().subscribe(
        (data) => {
          this.plantillas = data.plantillas;
        },
        (error) => {
          console.error('Error al obtener plantillas:', error);
          // Puedes manejar el error según tus necesidades
        }
      );
    }
    sanitizeUrl(url: string): SafeResourceUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  agregarCertificado(): void {
    this.router.navigate(['/eventos/usuarios/formCertificado']);
  }
  goBack(): void {
    this.location.back();
  }
  mostrarEventos(): void {
    this.router.navigate(['/dashboard']);
  }
  mostrarValidacion(): void {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas(): void {
    this.router.navigate(['/firmas']);
  }
  agregarPlantilla(): void {
    this.router.navigate(['/eventos/usuarios/formPlantilla']);
  }
}
