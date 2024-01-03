import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';
import { NavbarComponent } from "../../componentes/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uduarios',
  templateUrl: './uduarios.component.html',
  styleUrl: './uduarios.component.css',
  imports: [CommonModule, NavbarComponent],
  standalone: true,
})
export class UduariosComponent implements OnInit {
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
    this.router.navigate(['/eventos/usuarios/formEst']);
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
