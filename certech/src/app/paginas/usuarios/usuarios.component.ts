import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getParticipantes().subscribe(
      (response) => {
        this.users = response.participantes || [];
      },
      (error) => {
        console.error('Error al obtener los participantes:', error);
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
    this.router.navigate(['/eventos/usuarios/tabla']);
  }

  AgregarEstudiante() {
    this.router.navigate(['eventos/usuarios/formEstudiante']);
  }

  editarUsuario(index: number) {
    const usuarioAEditar = this.users[index];
    const cedulaUsuario = usuarioAEditar.Cedula;

    this.userService.setCedulaUsuario(cedulaUsuario);
    this.router.navigate(['/eventos/formEstedit', cedulaUsuario]);
  }

  eliminarUsuario(index: number) {
    const confirmarEliminar = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmarEliminar) {
      this.users.splice(index, 1);
      this.userService.setUsers(this.users);
    }
  }
}
