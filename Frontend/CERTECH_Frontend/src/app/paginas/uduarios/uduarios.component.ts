import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../componentes/navbar/navbar.component";
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';

@Component({
    selector: 'app-uduarios',
    standalone: true,
    templateUrl: './uduarios.component.html',
    styleUrl: './uduarios.component.css',
    imports: [CommonModule, NavbarComponent]
})
export class UduariosComponent implements OnInit {
   
    constructor(private router: Router, private userService: UserService) {}

  mostrarEventos() {
    this.router.navigate(['/dashboard']);
}
mostrarValidacion() {
    this.router.navigate(['/validacion']);
}
mostrarFirmas() {
    this.router.navigate(['/firmas']);
}
users: any[] = [
    
];

ngOnInit() {
    // Suscribirse a los cambios en la lista de usuarios
    this.userService.usersChanged.subscribe((newUsers: any[]) => {
        this.users = newUsers;
    });

    // Inicialmente obtener la lista actual de usuarios
    this.users = this.userService.getUsers();
}

mostrarTabla() {
    this.router.navigate(['/eventos/usuarios/tabla']);
}
AgregarEstudiante(){
    this.router.navigate(['eventos/usuarios/formEst']);
}
editarUsuario(index: number) {
    const usuarioAEditar = this.users[index];
    const cedulaUsuario = usuarioAEditar.Cedula;

    this.userService.setCedulaUsuario(cedulaUsuario);
    this.router.navigate(['/eventos/formEstedit',cedulaUsuario]);
    console.log(cedulaUsuario);
  }

  eliminarUsuario(index: number) {
    // Aquí puedes implementar la lógica para eliminar un usuario
    const confirmarEliminar = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmarEliminar) {
      this.users.splice(index, 1);
      this.userService.setUsers(this.users);
    }
  }

}