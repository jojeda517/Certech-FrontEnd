import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {
  private apiUrl = 'http://34.125.254.116:8000/api/firma/';
  private apiUrlUpdate = 'http://34.125.254.116:8000/api/firmaupdate/';

  constructor(private http: HttpClient) {}

  obtenerFirmas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Obtener una firma específica por ID
  obtenerFirmaPorId(id_firma: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id_firma}`);
  }

  // Crear una nueva firma
  crearFirma(firmaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, firmaData);
  }

  // Actualizar una firma existente por ID
  actualizarFirma(id_firma: number, firmaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrlUpdate}/${id_firma}`, firmaData);
  }

  // Eliminar una firma por ID
  eliminarParticipante(id_participante: string): Observable<any> {
    const url = `${this.apiUrl}${id_participante}/`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error('Error:', error);
    return throwError('Algo salió mal');
  }

}
