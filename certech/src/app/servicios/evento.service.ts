import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiUrl = 'http://127.0.0.1:8000/api/evento/';
  private baseUrl = 'http://127.0.0.1:8000/api/eventoupdate';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getEventos(idEvento?: string): Observable<any> {
    const url = idEvento ? `${this.apiUrl}${idEvento}/` : this.apiUrl;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  createEvento(eventoData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, eventoData).pipe(
      catchError(this.handleError)
    );
  }

  deleteEvento(idEvento: string): Observable<any> {
    const url = `${this.apiUrl}${idEvento}/`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.');
  }

  actualizarEvento(idEvento: string, formData: FormData): Observable<any> {
    const url = `${this.baseUrl}/${idEvento}/`;
    const headers = new HttpHeaders();  // Create a new HttpHeaders object
    // Do not set 'Content-Type' here to let the browser set it automatically for FormData
  
    return this.http.post(url, formData, { headers })  // Pass headers as an option
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
