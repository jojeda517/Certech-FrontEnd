import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {


  private participantes: any[] = [];

  obtenerUsuarios(): Observable<any[]> {
    // Simulamos una solicitud HTTP para obtener usuarios
    return of(this.participantes);
  }
  agregarParticipante(participante: any): void {
    this.participantes.push(participante);
  }

  // Otros métodos del servicio, como agregar, editar, eliminar, etc., podrían ir aquí...

}