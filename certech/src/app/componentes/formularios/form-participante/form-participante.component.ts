import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticipantesService } from 'src/app/servicios/participantes.service';

@Component({
  selector: 'app-form-participante',
  templateUrl: './form-participante.component.html',
  styleUrls: ['./form-participante.component.css']
})
export class FormParticipanteComponent {
  cedula: string = '';
  nombre: string = '';
  telefono: string = '';
  correo: string = '';

  constructor(private participantesService: ParticipantesService, private router: Router) {}

  guardar(): void {
    const nuevoParticipante = {
      cedula: this.cedula,
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
    };

    this.participantesService.agregarParticipante(nuevoParticipante);
    console.log('Guardando formulario:', nuevoParticipante);
    this.router.navigate(['/prueba']);
   ;

  }

  cancelar(): void {
    console.log('Formulario cancelado');

    // Puedes reiniciar los campos si lo necesitas
    this.cedula = '';
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
  }
}