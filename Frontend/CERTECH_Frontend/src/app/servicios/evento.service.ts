import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'http://34.125.254.116:8000/api/evento/';
  private apiUrlUpdate = 'http://34.125.254.116:8000/api/eventoupdate/';

  constructor(private http: HttpClient) { }

  getEventos(idEvento?: string): Observable<any> {
    const url = idEvento ? `${this.apiUrl}${idEvento}/` : this.apiUrl;
    return this.http.get<any>(url);
  }

  createEvento(eventoData: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre_evento', eventoData.nombre_evento);
    formData.append('tipo_evento', eventoData.tipo_evento);
    formData.append('descripcion_evento', eventoData.descripcion_evento);
    formData.append('portada', eventoData.portada);
    formData.append('logo', eventoData.logo);
    return this.http.post<any>(this.apiUrl, formData);
  }

  deleteEvento(idEvento: string): Observable<any> {
    const url = `${this.apiUrl}${idEvento}/`;
    return this.http.delete<any>(url);
  }

  updateEvento(idEvento: string, eventoData: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre_evento', eventoData.nombre_evento);
    formData.append('tipo_evento', eventoData.tipo_evento);
    formData.append('descripcion_evento', eventoData.descripcion_evento);
    formData.append('portada', eventoData.portada);
    formData.append('logo', eventoData.logo);
    const url = `${this.apiUrlUpdate}${idEvento}/`;
    return this.http.post<any>(url, formData);
  }
}
