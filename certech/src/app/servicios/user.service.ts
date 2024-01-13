import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../componentes/formularios/form-estudiante/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private participantes: any[] = [];

  private apiUrl = 'http://127.0.0.1:8000/api/participante/';
  private apifile = 'http://127.0.0.1:8000/api/participantefile/';
  private apiEst = 'http://127.0.0.1:8000/api/participanteEvento/';
  constructor(private http: HttpClient) {}

  
  obtenerparticipante(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
 
  getParticipantes(idParticipante?: string): Observable<any> {
    const url = idParticipante ? `${this.apiEst}${idParticipante}/` : this.apiEst;
    return this.http.get<any>(url);
  }
  
  crearParticipante(cedula: string, nombre: string, celular: string, correo: string): Observable<any> {
    const participanteData = { cedula, nombre_apellido: nombre, celular, correo };
    return this.http.post<any>(this.apiUrl, participanteData);
  }

  actualizarParticipante(id_participante: string, participanteData: any): Observable<any> {
    const url = `${this.apiUrl}${id_participante}/`;
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


  
  obtenerUsuarios(): Observable<any[]> {
    // Simulamos una solicitud HTTP para obtener usuarios
    return of(this.participantes);
  }
  agregarParticipante(participante: any): void {
    this.participantes.push(participante);
  }

  // Otros métodos del servicio, como agregar, editar, eliminar, etc., podrían ir aquí...
}
