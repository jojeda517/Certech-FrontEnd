import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-certificado',
  templateUrl: './form-certificado.component.html',
  styleUrls: ['./form-certificado.component.css']
})
export class FormCertificadoComponent implements OnInit {
  certificado: any = {};
  datosAutoridad: any = {};

  constructor(private certificadoService: CertificadoService) {}

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

    html2pdf()
      .from(content)
      .set(options)
      .outputPdf((pdf: any) => {
        // Agregar información al PDF (por ejemplo, firma y nombre de la autoridad)
        // Puedes ajustar las coordenadas y el formato según tus necesidades
        const firmaX = 10;
        const firmaY = pdf.internal.pageSize.height - 20;
        const autoridadX = 50;
        const autoridadY = pdf.internal.pageSize.height - 15;

        pdf.addImage(this.datosAutoridad.firma, 'JPEG', firmaX, firmaY, 15, 15);
        pdf.text(this.datosAutoridad.nombreAutoridad, autoridadX, autoridadY);

        // Guardar el PDF o realizar acciones adicionales
        window.open(URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' })));
      });
  }
}