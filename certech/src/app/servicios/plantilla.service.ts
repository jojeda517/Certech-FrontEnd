import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlantillaService {
  private apiUrl = 'http://127.0.0.1:8000/api/plantilla/';

  constructor(private http: HttpClient) {}

  obtenerPlantillas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerPlantilla(idPlantilla: string): Observable<any> {
    const url = `${this.apiUrl}${idPlantilla}/`;
    return this.http.get<any>(url);
  }

  subirPlantilla(archivo: File, idPlantilla?: string): Observable<any> {
    const formData = new FormData();
    formData.append('plantilla', archivo);

    if (idPlantilla) {
      const url = `${this.apiUrl}${idPlantilla}/`;
      return this.http.post<any>(url, formData);
    } else {
      return this.http.post<any>(this.apiUrl, formData);
    }
  }

  eliminarPlantilla(idPlantilla: string): Observable<any> {
    const url = `${this.apiUrl}${idPlantilla}/`;
    return this.http.delete<any>(url);
  }
  private handleError(error: any) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.');
  }

}
