import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantillaService } from 'src/app/servicios/plantilla.service';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent implements OnInit {
  isEditing: boolean = false;
  nuevaPlantilla: any = {};

  constructor(
    private router: Router,
    private plantillaService: PlantillaService
  ) {}

  ngOnInit(): void {
    // Agrega lógica de inicialización si es necesario
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
    this.router.navigate(['/eventos/seccionCertificados']);
  }

  agregarOEditarPlantilla(): void {
    const formData = new FormData();
    formData.append('plantilla', this.nuevaPlantilla.portada);

    this.plantillaService.subirPlantilla(formData).subscribe(
      (response) => {
        console.log('Plantilla agregada con éxito:', response);
        // Puedes realizar acciones adicionales después de agregar la plantilla

        // Navegar a la página "/eventos/seccionCertificados" y recargar automáticamente
        this.router.navigate(['/eventos/seccionCertificados'], { queryParams: { reload: true } });
      },
      (error) => {
        console.error('Error al agregar plantilla:', error);

        if (error instanceof HttpErrorResponse) {
          console.log('Error Status:', error.status);
          console.log('Error Body:', error.error);
        }

        // Puedes manejar el error según tus necesidades
      }
    );
  }

  onPortadaSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      this.nuevaPlantilla.portada = selectedFile;
    } else {
      // Manejar el caso en el que se seleccione un archivo incorrecto
      console.error('Por favor, seleccione un archivo PDF.');
    }
  }
}