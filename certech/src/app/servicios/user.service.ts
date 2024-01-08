import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../componentes/formularios/form-estudiante/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://34.125.254.116:8000/api/participante/';
  private apifile = 'http://34.125.254.116:8000/api/participantefile/';
  constructor(private http: HttpClient) {}
  
  obtenerparticipante(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getParticipantess(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Usuario>(url);
  }
  getParticipantes(idParticipante?: string): Observable<any> {
    const url = idParticipante ? `${this.apiUrl}${idParticipante}/` : this.apiUrl;
    return this.http.get<any>(url);
  }
  
  crearParticipante(cedula: string, nombre: string, celular: string, correo: string): Observable<any> {
    const participanteData = { cedula, nombre_apellido: nombre, celular, correo };
    return this.http.post<any>(this.apiUrl, participanteData);
  }

  actualizarParticipante(id_participante: string, participanteData: any): Observable<any> {
    const url = `${this.apiUrl}participante/${id_participante}/`;
    return this.http.put<any>(url, participanteData);
  }

  eliminarParticipante(id_participante: string): Observable<any> {
    const url = `${this.apiUrl}${id_participante}/`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }
  subirArchivoExcel(archivo: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('excel_file', archivo, archivo.name);

    return this.http.post<any>(this.apifile, formData);
  }

  // Método para manejar errores
  private handleError(error: any) {
    console.error('Error:', error);
    return throwError('Algo salió mal');
  }


}
