import { Component, OnInit } from '@angular/core';
import { CertificadosService } from 'src/app/servicios/certificados.service';

@Component({
  selector: 'app-form-certificado',
  templateUrl: './form-certificado.component.html',
  styleUrls: ['./form-certificado.component.css']
})
export class FormCertificadoComponent implements OnInit {
  certificado: any = {};
  datosAutoridad: any = {};

  constructor(private certificadoService: CertificadosService) {}

  ngOnInit() {
    // Al inicializar el componente, obtenemos los datos necesarios para el certificado
    this.certificadoService.getDatosParaCertificado().subscribe(
      (datos) => {
        this.datosAutoridad = datos;
      },
      (error) => {
        console.error('Error al obtener datos de la base de datos:', error);
      }
    );
  }

  submitForm() {
    // Lógica para manejar el envío del formulario
    console.log('Certificado creado:', this.certificado);

    // Generar PDF
    this.generatePDF();
  }

  generatePDF() {
    const content: HTMLElement = document.getElementById('certificado-form')!;
    const options = {
      margin: 10,
      filename: 'certificado.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    
}

}
