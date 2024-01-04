import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  constructor(private http: HttpClient) {}

  getDatosParaCertificado(): Observable<any> {
    // Aquí deberías hacer una llamada HTTP a tu servidor para obtener los datos necesarios
    // por ejemplo, la firma, el nombre de la autoridad, etc.
    return this.http.get<any>('URL_DE_TU_API_PARA_OBTENER_DATOS');
  }
}