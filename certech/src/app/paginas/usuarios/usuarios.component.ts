import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  participantes: any[] = [];
  participanteAEditar: any = {}; 
  nuevoParticipante = {
    cedula: '',
    nombre_apellido: '',
    celular: '',
    correo: ''
  };
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(): void {
    // En el ciclo de vida OnInit, podrías cargar los datos de los participantes
    this.cargarParticipantes();
  }

  cargarParticipantes(): void {
    this.userService.getParticipantes().subscribe(
      (response) => {
        if (response && response.participantes) {
          this.participantes = response.participantes;
        }
      },
      (error) => {
        console.error('Error al cargar participantes:', error);
        // Manejar errores aquí
      }
    );
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

  mostrarTabla() {
    this.router.navigate(['/eventos/tabla']);
  }

  AgregarEstudiante() {
    this.router.navigate(['eventos/usuarios/formEstudiante']);
  }

  editarParticipante(id_participante: string) {
    // Llama al servicio para obtener los detalles del participante según el id
    this.userService.getParticipantes(id_participante).subscribe(
      (participante) => {
        // Aquí tienes los detalles del participante, podrías modificarlos
        // Por ejemplo, asignar nuevos valores a sus propiedades
        participante.nombre = 'Nuevo nombre';
        participante.correo = 'nuevo_correo@example.com';

        // Luego, llama al método de actualización del servicio para actualizar el participante
        this.userService.actualizarParticipante(id_participante, participante).subscribe(
          (response) => {
            console.log('Participante actualizado:', response);
            // Llama a obtenerParticipantes para actualizar la lista después de la edición
            this.cargarParticipantes();
          },
          (error) => {
            console.error('Error al actualizar participante:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener detalles del participante:', error);
      }
    );
  }

  eliminarParticipante(id_participante: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este participante?');

    if (confirmacion) {
    this.userService.eliminarParticipante(id_participante).subscribe(
      (response) => {
        console.log('Participante eliminado:', response);
        // Volver a cargar la lista después de eliminar el participante
        this.cargarParticipantes();
      },
      (error) => {
        console.error('Error al eliminar participante:', error);
        // Manejar errores aquí
      }
    );
  }else{
    // El usuario canceló la eliminación
    console.log('Eliminación cancelada por el usuario.');
  }
  // El usuario canceló la eliminación
 
}

  onFileSelected(event: any) {
    const archivo: File = event.target.files[0];

    if (archivo) {
      this.subirArchivo(archivo);
    }
  }

  subirArchivo(archivo: File) {
    this.userService.subirArchivoExcel(archivo).subscribe(
      (response) => {
        console.log('Archivo subido correctamente:', response);
        // Manejar la respuesta aquí si es necesario
      },
      (error) => {
        console.error('Error al subir el archivo:', error);
        // Manejar errores aquí
      }
    );
  }
  importarArchivo() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click(); // Activa el input de tipo file
    }
  }
  }
  
