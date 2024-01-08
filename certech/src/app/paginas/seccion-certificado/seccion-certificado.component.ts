import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seccion-certificado',
  templateUrl: './seccion-certificado.component.html',
  styleUrls: ['./seccion-certificado.component.css']
})
export class SeccionCertificadoComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  agregarCertificado(): void {
    this.router.navigate(['/eventos/usuarios/formCertificado']);
  }
  goBack(): void {
    this.location.back();
  }
}
