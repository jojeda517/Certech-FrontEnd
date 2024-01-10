import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  { 
  busquedaRealizada = true;
  cedula: string ="";
  certificados: any[] =[]; // Arreglo para almacenar los certificados
  
  constructor(private http: HttpClient, private router: Router) { }

  buscarCertificados() {
    const apiUrl = `http://34.125.254.116:8000/api/certificadoParticipante/${this.cedula}/`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.certificados = this.formatFechaCertificados(data.certificados);
     
    },
    (error) => {
      this.certificados = [];
    
    });
  }

  private formatFechaCertificados(certificados: any[]): any[] {
    return certificados.map(certificado => {
      return {
        ...certificado,
        fecha: this.formatDate(certificado.fecha)
      };
    });
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const dd = this.padLeft(date.getDate(), 2);
    const mm = this.padLeft(date.getMonth() + 1, 2); // ¡Recuerda que los meses son indexados desde 0!
    const aa = date.getFullYear().toString().slice(2);
    const hh = this.padLeft(date.getHours(), 2);
    const min = this.padLeft(date.getMinutes(), 2);

    return `${dd}/${mm}/${aa} ${hh}:${min}`;
  }

  private padLeft(value: number, length: number): string {
    return value.toString().padStart(length, '0');
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

  verCertificado(url: string): void {
    this.router.navigate(['/vista-certificado'], { queryParams: { url } });
  }
  dirigirValidacion(){
      this.router.navigate(['/validador']);
  }
}