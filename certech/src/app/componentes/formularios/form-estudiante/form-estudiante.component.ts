import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {
  usuario: any;
  telefono: string = "";
  nombre: string = "";
  cedula: string = "";
  correo: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idUsuario = params['id'];
      console.log(idUsuario);
      
      if (idUsuario) {
        // Llama al servicio para obtener los detalles del usuario según el ID
        this.userService.getParticipantes(idUsuario).subscribe(
          (usuario) => {
            this.usuario = usuario; // Asigna los detalles del usuario a la variable del componente
            // Puedes realizar más acciones si es necesario
          },
          (error) => {
            console.error('Error al obtener detalles del usuario:', error);
            // Maneja el error según tus necesidades
          }
        );
      }
    });
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

  guardar(): void {
    if (this.nombre && this.telefono && this.cedula && this.correo) {
      this.userService.crearParticipante(this.cedula, this.nombre, this.telefono, this.correo).subscribe(
        (response) => {
          console.log('Participante creado:', response);
          this.router.navigate(['/eventos/usuarios']);
        },
        (error) => {
          console.error('Error al crear el participante:', error);
        }
      );
    } else {
      console.error('Por favor, complete todos los campos antes de guardar.');
    }
  }

  cancelar(): void {
    this.router.navigate(['/dashboard']);
  }
}


