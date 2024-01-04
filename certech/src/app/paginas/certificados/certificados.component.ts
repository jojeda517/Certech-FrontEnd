import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements AfterViewInit {
  private certificados: any[] = [

    {
      numeroCertificado: 2,
      nombre: 'Ana García lopez freire',
      evento: 'Taller de JavaScript',
      fechainicio: '12 de junio del 2022',
      tiempo:'32 horas',
      responsablenombre: 'Ingeniera elizabeth',
      responsablecargo: 'Decana FISEI',
      firma: 'firma.png'

    },
    // Agrega más certificados según sea necesario
  ];

  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.canvasConfig();
  }

  private canvasConfig() {
    const ctx2d = this.canvas.getContext('2d');
    if (ctx2d) {
      const imgBG = new Image();
      imgBG.src = '../../../assets/images/Certificado.jpg';
      imgBG.onload = () => {
        ctx2d.drawImage(imgBG, 0, 0, this.canvas.width, this.canvas.height);
  
        this.certificados.forEach(certificado => {
          // Ajustar el tamaño y tipo de letra según tus preferencias
          ctx2d.font = 'bold 30px Arial';
          ctx2d.fillStyle = 'black';
  
          // Calcular el ancho del texto para centrarlo
          const nombreTexto = certificado.nombre;
          const nombreTextoAncho = ctx2d.measureText(nombreTexto).width;
          const nombreX = (this.canvas.width - nombreTextoAncho) / 2;
          const nombreY = certificado.nombrePosicionY || 500;
  
          ctx2d.fillText(nombreTexto, nombreX, nombreY);
  
          // Texto del certificado
          ctx2d.font = 'italic 20px Arial';
          ctx2d.fillStyle = 'black';
          const participacionTexto = 'Por haber participado y aprobado el curso:';
          const participacionTextoAncho = ctx2d.measureText(participacionTexto).width;
          ctx2d.fillText(participacionTexto, (this.canvas.width - participacionTextoAncho) / 2, nombreY + 50);
  
          // Ajustar la posición del evento según la información proporcionada
          const eventoX = certificado.eventoPosicionX || 300;
          const eventoY = certificado.eventoPosicionY || 300;
  
          // Ajustar el tamaño y tipo de letra según tus preferencias
          ctx2d.font = 'bold 20px Arial';
          ctx2d.fillStyle = 'black';
          ctx2d.fillText(certificado.evento, (this.canvas.width - ctx2d.measureText(certificado.evento).width) / 2, nombreY + 110);
  
          // Texto del certificado
          ctx2d.font = 'italic 20px Arial';
          ctx2d.fillStyle = 'black';
          const duracionTexto = `Desde el: ${certificado.fechainicio} con una duración de: ${certificado.tiempo}`;
          const duracionTextoAncho = ctx2d.measureText(duracionTexto).width;
          ctx2d.fillText(duracionTexto, (this.canvas.width - duracionTextoAncho) / 2, nombreY + 150);
  
          const firma = new Image();
          firma.src = '../../../assets/images/1x/' + certificado.firma;
          firma.onload = () => {
            const firmaWidth = 200; // Ancho deseado de la firma
            const firmaHeight = 70; // Altura deseada de la firma
          
            // Calcular las coordenadas para centrar la imagen
            const firmaX = (this.canvas.width - firmaWidth) / 3;
            const firmaY = 700; // Puedes ajustar la posición vertical según sea necesario
          
            // Dibujar la imagen centrada
            ctx2d.drawImage(firma, firmaX, firmaY, firmaWidth, firmaHeight);
          
            // Agregar el nombre del responsable debajo de la firma
            ctx2d.font = 'italic 20px Arial';
            ctx2d.fillStyle = 'black';
            ctx2d.fillText(certificado.responsablenombre, firmaX, firmaY + firmaHeight + 20); // Ajusta las coordenadas según sea necesario
          
            // Agregar el cargo del responsable debajo del nombre
            ctx2d.font = 'italic 18px Arial';
            ctx2d.fillStyle = 'black';
            ctx2d.fillText(certificado.responsablecargo, firmaX, firmaY + firmaHeight + 40); // Ajusta las coordenadas según sea necesario
          };
        });
      };
    }
  }
  
  download() {
    // Lógica para descargar la imagen generada, por ejemplo, usando toDataURL y creando un enlace de descarga
    const imageDataUrl = this.canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageDataUrl;
    link.download = 'certificado.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
