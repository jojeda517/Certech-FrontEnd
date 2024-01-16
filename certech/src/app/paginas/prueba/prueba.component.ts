import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/componentes/formularios/form-estudiante/usuario.model';
import { ParticipantesService } from 'src/app/servicios/participantes.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  participantes: any[] = [];

  constructor(private participantesService: ParticipantesService, private router: Router) {}

  ngOnInit(): void {
    // Cargar usuarios al inicializar el componente
    // Esto podría ser opcional si prefieres cargar desde el servicio directamente
    this.cargarUsuarios();
  }

  // Método para cargar usuarios desde el servicio
  cargarUsuarios(): void {
    this.participantesService.obtenerUsuarios().subscribe(
      (usuarios: any[]) => {
        this.participantes = usuarios;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
   
  }
  AgregarEstudiante(){
    this.router.navigate(['formularioprueba']);
  }
  importarArchivo(){}

  // Resto de tus métodos (agregar, editar, eliminar) aquí...
}