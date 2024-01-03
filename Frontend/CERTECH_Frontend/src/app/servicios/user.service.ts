import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://34.125.254.116:8000/api/participante/';
  private apiUrlFile = 'http://34.125.254.116:8000/api/participantefile/';
  private cedulaUsuario: string = '';
  private users: any[] = [];
  constructor(private http: HttpClient) {}
  setCedulaUsuario(cedula: string): void {
    this.cedulaUsuario = cedula;
  }

  getCedulaUsuario(): string {
    return this.cedulaUsuario;
  }

  setUsers(users: any[]): void {
    this.users = users;
  }

  getUsers(): any[] {
    return this.users;
  }
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

  cargarArchivoExcel(datos: any[]): Observable<any> {
    // Convertir datos a un archivo Blob
    const csvData = datos.map(user => `${user.nombre},${user.cedula},${user.correo}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });

    // Crear un objeto FormData y asignar el archivo Blob
    const formData: FormData = new FormData();
    formData.append('excel_file', blob, 'usuarios.csv');

    // Realizar la solicitud HTTP POST al servidor
    return this.http.post<any>(this.apiUrlFile, formData);
  }
}
