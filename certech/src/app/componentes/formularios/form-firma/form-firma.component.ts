import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirmaService } from 'src/app/servicios/firma.service';

@Component({
  selector: 'app-form-firma',
  templateUrl: './form-firma.component.html',
  styleUrls: ['./form-firma.component.css']
})
export class FormFirmaComponent implements OnInit {
  nuevaFirma: any = {
    propietario_firma: '',
    cargo_propietario: '',
    firma: null as File | null,
    estado_firma: 'Activo'
  };

  constructor(private router: Router, private firmaService: FirmaService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idFirma = params['id_firma'];
      console.log(idFirma)

      if (idFirma) {
        this.firmaService.getFirmas(idFirma).subscribe(
          (data): void => {
            console.log(data);
            if (data && data.firma) {
              this.nuevaFirma.propietario_firma = data.firma.id_participante;
              this.nuevaFirma.cargo_propietario = data.cargo_propietario;
              this.nuevaFirma.firma = data.firma.firma; // Asumiendo que 'firma' es el campo correcto
              this.nuevaFirma.estado_firma = data.firma.estado_firma;
      
              console.log('Firma obtenida:', data.firma);
            } else {
              console.error('La respuesta del servicio no tiene la estructura esperada.');
            }
          },
          (error: any) => {
            console.error('Error al obtener firma por ID:', error);
          }
        );
      }
      
          },
          (error) => {
            console.error('Error al obtener participante por ID:', error);
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
      formData.append('firma', this.nuevaFirma.firma as File, 'nombre_archivo_firma.jpg');
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
