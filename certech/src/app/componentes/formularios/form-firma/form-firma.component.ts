import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirmaService } from 'src/app/servicios/firma.service';

@Component({
  selector: 'app-form-firma',
  templateUrl: './form-firma.component.html',
  styleUrls: ['./form-firma.component.css']
})
export class FormFirmaComponent implements AfterViewInit {
  isEditing: boolean = false;
  nuevaFirma: any = {
    propietario_firma: '',
    cargo_propietario: '',
    firma: null as File | null,
    estado_firma: 'Activo'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private firmaService: FirmaService,
    private cdr: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
      this.route.params.subscribe(params => {
        this.isEditing = params['id_firma'] !== undefined;
    
        if (this.isEditing) {
          const id_firma = params['id_firma'];
    
          this.firmaService.getFirmas(id_firma).subscribe(
            (data) => {
              if (data && data.firma) {
                this.nuevaFirma = data.firma;  // Aquí corregí data.evento por data.firma
                this.cdr.detectChanges();
              } else {
                console.error('La respuesta del servicio no tiene la estructura esperada.');
              }
            },
            (error) => {
              console.error('Error al obtener firma por ID:', error);
            }
          );
        }
      });
      this.cdr.detectChanges();
    }
    
  /* ngOnInit(): void {
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
     */
  

  /* guardar(): void {
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
  } */

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
  
  cancelar(): void {
    this.router.navigate(['/firmas']);
  }

  agregarOEditarEvento(): void {
    const formData = new FormData();
    formData.append('propietario_firma', this.nuevaFirma.propietario_firma);
    formData.append('cargo_propietario', this.nuevaFirma.cargo_propietario);
    formData.append('firma', this.nuevaFirma.firma as File);
    formData.append('estado_firma', this.nuevaFirma.estado_firma);

    if (this.isEditing) {
      this.editarFirma(this.nuevaFirma.id_firma, formData);
    } else {
      this.agregarFirma(formData);
    }
  }
  private agregarFirma(formData: FormData): void {
    this.firmaService.crearFirma(formData).subscribe(
      (response) => {
        console.log('Evento creado:', response);
        this.router.navigate(['/firmas']);
      },
      (error) => {
        console.error('Error al crear firma:', error);
      }
    );
  }

  private editarFirma(id_firma: string | undefined, formData: FormData): void {
    if (!id_firma) {
      console.error('ID de firma no proporcionado para la edición.');
      return;
    }
  
    this.firmaService.actualizarFirma(id_firma, formData).subscribe(
      (response) => {
        console.log('Firma editada:', response);
        // Manejar la respuesta del backend aquí
        this.router.navigate(['/firmas']);
      },
      (error) => {
        console.error('Error al editar firma:', error);
        // Manejar errores aquí
      }
    );
  }
  
}
