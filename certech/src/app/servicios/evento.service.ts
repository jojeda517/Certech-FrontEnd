import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private apiUrl = 'http://127.0.0.1:8000/api/evento/';

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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(
        `Código del error ${error.status}, ` +
        `error: ${error.error}`);
    }
    return throwError('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.');
  }
}
