import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  private apiUrl = 'http://34.125.254.116:8000/api/certificados/';

  constructor(private http: HttpClient) {}

  // Otros métodos del servicio...

  buscarCertificados(filtro: string): Observable<any> {
    const url = `${this.apiUrl}?filtro=${filtro}`;
    return this.http.get<any>(url);
  }
}
