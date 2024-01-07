import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  participantes: any[] = [];
  nuevoParticipante = {
    cedula: '',
    nombre_apellido: '',
    celular: '',
    correo: ''
  };
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

 /*  editarUsuario(index: number) {
    const participanteAEditar = this.participantes[index];
    const cedulaParticipante = participanteAEditar.cedula;
  
    this.userService.setCedulaUsuario(cedulaParticipante);
    this.router.navigate(['/eventos/formEstedit', cedulaParticipante]);
  }
   */
  editarUsuario(index: number){

  }

  eliminarParticipante(idParticipante: string): void {
    this.userService.eliminarParticipante(idParticipante).subscribe(
      (response) => {
        console.log('Participante eliminado:', response);
        // Realizar acciones después de eliminar el participante, como cargar nuevamente la lista de participantes
        this.cargarParticipantes();
      },
      (error) => {
        console.error('Error al eliminar participante:', error);
        // Manejar errores aquí
      }
    );
    }
  }

