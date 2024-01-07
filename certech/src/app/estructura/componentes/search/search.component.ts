import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  cedula: string = "";
  certificados: any[] = [];

  constructor(private http: HttpClient) { }

  buscarCertificados() {
    const apiUrl = `http://34.125.254.116:8000/api/CertificadoParticipante/${this.cedula}/`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.certificados = data.certificados;
      this.obtenerNombresEventos();
    });
  }

  obtenerNombresEventos() {
    // Obtener los nombres de los eventos de manera asíncrona
    const eventosPromises = this.certificados.map(certificado =>
      this.http.get(`http://34.125.254.116:8000/api/evento/${certificado.id_evento}/`)
        .toPromise()
    );

    // Manejar las promesas usando Promise.all
    Promise.all(eventosPromises)
      .then((eventosData: any[]) => {
        eventosData.forEach((data, index) => {
          // Asignar el nombre del evento al certificado correspondiente
          this.certificados[index].nombre_evento = data.nombre_evento;
        });
      })
      .catch(error => {
        console.error('Error al obtener nombres de eventos:', error);
      });
  }

  getNombreEvento(idEvento: number): string {
    const certificado = this.certificados.find(cert => cert.id_evento === idEvento);
    return certificado ? certificado.nombre_evento : 'Nombre no encontrado';
  }
}