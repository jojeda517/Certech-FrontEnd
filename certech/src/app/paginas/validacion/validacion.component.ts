import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificadosService } from 'src/app/servicios/certificados.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent {
  constructor(private router: Router,private http: HttpClient,private searchService:CertificadosService, private sanitizer: DomSanitizer) {}

  mostrarEventos() {
  this.router.navigate(['/dashboard']);
  }
  mostrarValidacion() {
    this.router.navigate(['/validacion']);
    }
  mostrarFirmas() {
      this.router.navigate(['/firmas']);
    }
    codigoUnico: string ="";
    certificados: any[] =[]; // Arreglo para almacenar los certificados
    certificadoData: any;
    searchText: string = '';
    verificado: boolean = true;

    ngOnInit(): void {
      //this.search();
    }
  
    /*search(): void {
      this.searchService.searchCertificado(this.searchText).subscribe((data: any) => {
        this.certificadoData = data;
      });
  }*/
  resetVerification(): void {
    this.certificadoData = null;
    this.verificado = true;
  }

  search(): void {
    this.resetVerification(); 
    this.searchService.searchCertificado(this.searchText).subscribe(
      (data: any) => {
        this.certificadoData = data;
        // Supongamos que certificadoData.url contiene la URL del PDF
        this.certificadoData.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://34.125.254.116:8000/' + this.certificadoData.url);

      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          // El código 404 indica que no se encontraron resultados
          this.certificadoData = null; // Limpiar datos existentes
        } else {
          // Manejar otros errores aquí si es necesario
          console.error('Error en la solicitud:', error);
          this.verificado = false;

        }
      }
    );
  }

}