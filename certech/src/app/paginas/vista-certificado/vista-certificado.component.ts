import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-vista-certificado',
  templateUrl: './vista-certificado.component.html',
  styleUrls: ['./vista-certificado.component.css']
})
export class VistaCertificadoComponent implements OnInit {

  pdfUrl: SafeResourceUrl = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Obtener el valor del parámetro de consulta 'url'
    this.route.queryParams.subscribe(params => {
      const urlParam = params['url'];

      // Construir la URL completa del PDF y sanitizarla
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://34.125.254.116:8000/${urlParam}`);
      this.pdfUrl = sanitizedUrl;
    });
  }
}
