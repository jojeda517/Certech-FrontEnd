import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirmaService } from 'src/app/servicios/firma.service';

@Component({
  selector: 'app-form-firma',
  templateUrl: './form-firma.component.html',
  styleUrls: ['./form-firma.component.css']
})
export class FormFirmaComponent implements OnInit {
  firmaId: number | null = null;
  nuevaFirma: any = {
    propietario_firma: '',
    cargo_propietario: '',
    firma: null as File | null,
    estado_firma: 'Activo'
  };
  

  constructor(private router: Router, private firmaService: FirmaService,private route: ActivatedRoute , private localitatio:Location) {}
 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id_firma = params['id_firma'];
      console.log(id_firma)
      if (id_firma) {
        this.firmaService.obtenerFirmaPorId(id_firma).subscribe(
          (firma: any) => {
            // Cargar los datos de la firma obtenida en el formulario
            this.nuevaFirma = firma;
            console.log('Firma obtenida:', firma);
          },
          (error) => {
            console.error('Error al obtener firma por ID:', error);
            // Maneja el error según tus necesidades
          }
        );
      }
    });
  } 
  private cargarDetallesFirma(idFirma: number): void {
    this.firmaService.obtenerFirmaPorId(idFirma).subscribe(
      (firma: any) => {
        // Cargar los datos de la firma existente en el formulario para editar
        this.nuevaFirma = firma;
        console.log('Firma obtenida:', firma);
      },
      error => {
        console.error('Error al obtener la firma:', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/firmas']);
  }

  guardar(): void {
    if (this.nuevaFirma.propietario_firma && this.nuevaFirma.cargo_propietario && this.nuevaFirma.firma) {
      const formData = new FormData();
      formData.append('propietario_firma', this.nuevaFirma.propietario_firma);
      formData.append('cargo_propietario', this.nuevaFirma.cargo_propietario);
      formData.append('firma', this.nuevaFirma.firma as File, 'firma.jpg');
      formData.append('estado_firma', this.nuevaFirma.estado_firma);

      this.firmaService.crearFirma(formData).subscribe(
        (response) => {
          console.log('Firma creada:', response);
          this.router.navigate(['/firmas']);
        },
        (error) => {
          console.error('Error al crear firma:', error);
          alert('Error al guardar la firma');
        }
      );
    } else {
      console.error('Por favor, complete todos los campos antes de guardar.');
    }
  }

  onFirmaSelected(event: any): void {
    const file = event.target.files[0];
    this.nuevaFirma.firma = file;
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
}
