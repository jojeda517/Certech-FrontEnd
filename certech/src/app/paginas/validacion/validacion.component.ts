import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificadosService } from 'src/app/servicios/certificados.service';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent {
  constructor(private router: Router,private http: HttpClient,private searchService:CertificadosService) {}

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

    ngOnInit(): void {
      this.search();
    }
  
    search(): void {
      this.searchService.searchCertificado(this.searchText).subscribe((data: any) => {
        this.certificadoData = data;
      });
  }
}