import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmasService {
  private apiUrl = 'http://34.125.254.116:8000/api/firma/';
  private apiUrlUpdate = 'http://34.125.254.116:8000/api/firmaupdate/';

  constructor(private http: HttpClient) {}

  getFirmas(idFirma?: string): Observable<any> {
    const url = idFirma ? `${this.apiUrl}${idFirma}/` : this.apiUrl;
    return this.http.get<any>(url);
  }

  createFirma(firmaData: any): Observable<any> {
    const formData = new FormData();
    formData.append('propietario_firma', firmaData.propietario_firma);
    formData.append('cargo_propietario', firmaData.cargo_propietario);
    formData.append('firma', firmaData.firma);
    return this.http.post<any>(this.apiUrl, formData);
  }

  deleteFirma(idFirma: string): Observable<any> {
    const url = `${this.apiUrl}${idFirma}/`;
    return this.http.delete<any>(url);
  }
  
  updateFirma(idFirma: string, firmaData: any): Observable<any> {
    const formData = new FormData();
    formData.append('propietario_firma', firmaData.propietario_firma);
    formData.append('cargo_propietario', firmaData.cargo_propietario);
    formData.append('firma', firmaData.firma);
    const url = `${this.apiUrlUpdate}${idFirma}/`;
    return this.http.put<any>(url, formData);
  }
}
