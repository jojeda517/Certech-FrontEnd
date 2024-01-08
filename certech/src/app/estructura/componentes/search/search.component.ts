import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  cedula: string ="";
  certificados: any[] =[]; // Arreglo para almacenar los certificados
  
  constructor(private http: HttpClient) { }
  
  buscarCertificados() {
    const apiUrl = `http://34.125.254.116:8000/api/CertificadoParticipante/${this.cedula}/`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.certificados = data.certificados;
    });
  }


  obtenerNombresEventos() {
    // Itera sobre los certificados y realiza una solicitud para obtener el nombre de cada evento
    for (const certificado of this.certificados) {
      const apiUrl = `http://34.125.254.116:8000/api/evento/${certificado.id_evento}/`;

      this.http.get(apiUrl).subscribe((data: any) => {
        // Asigna el nombre del evento al certificado correspondiente
        certificado.nombre_evento = data.nombre_evento;
      });
    }
  }

  // Método para obtener el nombre del evento desde el certificado
  getNombreEvento(idEvento: number): string {
    const certificado = this.certificados.find(cert => cert.id_evento === idEvento);
    return certificado ? certificado.nombre_evento : 'Nombre no encontrado';
  }
}
  