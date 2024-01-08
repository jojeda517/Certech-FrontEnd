import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmaService } from 'src/app/servicios/firma.service';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.component.html',
  styleUrls: ['./firmas.component.css']
})
export class FirmasComponent implements OnInit {
  firmas: any[] = [];
  filtroNombre: string = '';
  constructor(private router: Router, private firmaService: FirmaService) {}

  ngOnInit(): void {
    this.getFirmas();
  }
  filtrarFirmas(): void {
    this.firmaService.obtenerFirmas().subscribe(
      (data) => {
        if (data && Array.isArray(data.firmas)) {
          this.firmas = data.firmas.filter((firma: { propietario_firma: string; }) => firma.propietario_firma.toLowerCase().includes(this.filtroNombre.toLowerCase()));
        } else {
          console.error('Los datos no contienen un array de firmas:', data);
          // Manejar el caso donde los datos no son válidos, por ejemplo, mostrando un mensaje de error en la interfaz de usuario.
        }
      },
      (error) => {
        console.error('Error al obtener firmas:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje de error en la interfaz de usuario.
      }
    );
  }
  

  getFirmas(): void {
    this.firmaService.obtenerFirmas().subscribe(
      (response) => {
        if (response && response.firmas) {
          this.firmas = response.firmas;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminarFirma(id_firma: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta autoridad?');

    // Verificar si el usuario confirmó la eliminación
    if (confirmacion) {
    this.firmaService.eliminarParticipante(id_firma).subscribe(
      (response) => {
        console.log('Firma eliminado:', response);
        // Volver a cargar la lista después de eliminar el participante
        this.getFirmas();
      },
      (error) => {
        console.error('Error al eliminar firma:', error);
        // Manejar errores aquí
      }
    );
  }else{
    console.log('Eliminación cancelada por el usuario.'); 
  }
  }

  agregarFirma(): void {
    this.router.navigate(['firmas/formFirmas']);
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
  editarFirma(){

  }
}
