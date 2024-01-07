import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://34.125.254.116:8000/api/participante/';

  constructor(private http: HttpClient) {}

  getParticipantes(idParticipante?: string): Observable<any> {
    const url = idParticipante ? `${this.apiUrl}${idParticipante}/` : this.apiUrl;
    return this.http.get<any>(url);
  }

  crearParticipante(cedula: string, nombre: string, celular: string, correo: string): Observable<any> {
    const participanteData = { cedula, nombre_apellido: nombre, celular, correo };
    return this.http.post<any>(this.apiUrl, participanteData);
  }

  actualizarParticipante(idParticipante: string, cedula: string, nombre: string, celular: string, correo: string): Observable<any> {
    const participanteData = { cedula, nombre_apellido: nombre, celular, correo };
    return this.http.put<any>(`${this.apiUrl}${idParticipante}/`, participanteData);
  }

  eliminarParticipante(idParticipante: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${idParticipante}/`);
  }
}
