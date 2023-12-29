import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-form-estu',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './form-estu.component.html',
  styleUrl: './form-estu.component.css'
})
export class FormEstuComponent implements OnInit {
  users: any[] = [];
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
  console.log(idUsuario)
      if (idUsuario) {
        // Realizar lógica para cargar los detalles del usuario utilizando el ID
      }
    });
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

  cancelar() {
    this.router.navigate(['/dashboard']);
  }

  guardar() {
    // Verificar si todos los campos requeridos están llenos
    if (this.nombre && this.telefono && this.cedula && this.correo) {
      // Crear un nuevo usuario con la información del formulario
      const nuevoUsuario = {
        'Nombre': this.nombre,
        'Telefono': this.telefono,
        'Cedula': this.cedula,
        'Correo': this.correo
      };

      // Obtener la lista actual de usuarios desde el servicio
      const usuariosActuales = this.userService.getUsers();

      // Agregar el nuevo usuario a la lista actual
      usuariosActuales.push(nuevoUsuario);

      // Actualizar la lista de usuarios en el servicio utilizando el método setUsers
      this.userService.setUsers(usuariosActuales);

      // Navegar a la ruta especificada
      this.router.navigate(['/eventos/usuarios']);
    } else {
      // Manejar el caso en el que no se completaron todos los campos
      console.error('Por favor, complete todos los campos antes de guardar.');
    }
  }
}