import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute, 
    private location: Location,
    private plantillaService: PlantillaService,
    private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        const idEvento = params['idEvento'];
        this.obtenerPlantillas();
      });
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
      this.route.queryParams.subscribe(params => {
        const id= params['id'];
        console.log(id)
        // Asegúrate de que estás usando el nombre correcto del parámetro en queryParams
        this.router.navigate(['/eventos/usuarios/formCertificado'], { queryParams: { id: id} });
      });
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
    this.route.queryParams.subscribe(params => {
      const id= params['id'];
      console.log(id)
      // Asegúrate de que estás usando el nombre correcto del parámetro en queryParams
      this.router.navigate(['/eventos/formPlantilla'], { queryParams: { id: id} });
    });
    
  }
  borrarPlantilla(idPlantilla: string): void {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este evento?');
  if (confirmacion) {
    this.plantillaService.eliminarPlantilla(idPlantilla).subscribe(
      (response) => {
        console.log('Evento eliminado:', response);
        // Volver a cargar la lista después de eliminar el participante
        this.obtenerPlantillas();
      },
      (error) => {
        console.error('Error al eliminar evento:', error);
        // Manejar errores aquí
      }
    );
  }else{
    console.log('Eliminación cancelada por el usuario.'); 
  }
  }
}
