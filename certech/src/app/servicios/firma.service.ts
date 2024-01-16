import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmaService {
  private apiUrl = 'http://127.0.0.1:8000/api/firma/';
  private baseUrl = 'http://127.0.0.1:8000/api/firmaupdate/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getFirmas(idFirma?: string): Observable<any> {
    const url = `${this.apiUrl}${idFirma}/`;
    return this.http.get<any>(url);
  }
  obtenerFirmas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Obtener una firma específica por ID
  obtenerFirmaPorId(id_firma: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id_firma}`);
  }

  // Crear una nueva firma
  crearFirma(firmaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, firmaData);
  }       

  // Actualizar una firma existente por ID
  actualizarFirma(id_firma: string, formData: FormData): Observable<any> {
    const url = `${this.baseUrl}${id_firma}/`;  // Corregir la construcción de la URL
    return this.http.post(url, formData)
      .pipe(
        catchError(this.handleError)
      );
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
