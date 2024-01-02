import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { FirmasService } from '../../servicios/firmas.service';

@Component({
    selector: 'app-form-firma',
    standalone: true,
    templateUrl: './form-firma.component.html',
    styleUrl: './form-firma.component.css',
    imports: [NavbarComponent,FormsModule]
})
export class FormFirmaComponent implements OnInit {
  firmas: any[] = [];
  cedula: string = "";
  nombre: string = "";
  firma: string = "";
  correo: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firmaService: FirmasService
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
    this.router.navigate(['/firmas']);
  }

  guardar() {
    // Verificar si todos los campos requeridos están llenos
    if (this.nombre  && this.cedula && this.correo) {
      // Crear un nuevo usuario con la información del formulario
      const nuevoFirma = {
        'Nombre': this.nombre,
        'Cedula': this.cedula,
        'Correo': this.correo
      };

      // Obtener la lista actual de usuarios desde el servicio
      const usuariosActuales = this.firmaService.getfirmas();

      // Agregar el nuevo usuario a la lista actual
      usuariosActuales.push(nuevoFirma);

      // Actualizar la lista de usuarios en el servicio utilizando el método setUsers
      this.firmaService.setFirmas(usuariosActuales);

      // Navegar a la ruta especificada
      this.router.navigate(['/eventos/firmas']);
    } else {
      // Manejar el caso en el que no se completaron todos los campos
      console.error('Por favor, complete todos los campos antes de guardar.');
    }
  }
}