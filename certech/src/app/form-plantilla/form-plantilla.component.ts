import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
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
    this.route.queryParams.subscribe(params => {
      const id= params['id'];
      console.log(id)
      // Asegúrate de que estás usando el nombre correcto del parámetro en queryParams
      this.router.navigate(['/eventos/seccionCertificados'], { queryParams: { id: id} });
    });
 
  }

  agregarOEditarPlantilla(): void {
    const formData = new FormData();
    formData.append('plantilla', this.nuevaPlantilla.portada);

    this.plantillaService.subirPlantilla(formData).subscribe(
      (response) => {
        console.log('Plantilla agregada con éxito:', response);
        // Puedes realizar acciones adicionales después de agregar la plantilla
        this.route.queryParams.subscribe(params => {
          const id = params['id'];
          console.log(id);
          // Asegúrate de que estás usando el nombre correcto del parámetro en queryParams
          this.router.navigate(['/eventos/seccionCertificados'], { queryParams: { reload: true, id: id } });
        });
       
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