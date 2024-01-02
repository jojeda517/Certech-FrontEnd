import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FirmasService } from '../servicios/firmas.service';

@Component({
  selector: 'app-firmas',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './firmas.component.html',
  styleUrl: './firmas.component.css'
})
export class FirmasComponent implements OnInit {
  constructor(private router: Router, private firmaService: FirmasService) {}
  ngOnInit(): void {
    this.firmas = this.firmaService.getfirmas();
  }

  mostrarEventos() {
  this.router.navigate(['/dashboard']);
  }
  mostrarValidacion() {
    this.router.navigate(['/validacion']);
    }
  mostrarFirmas() {
      this.router.navigate(['/firmas']);
    }

    firmas: any[] = []
    
    eliminarfirma(index: number) {
      // Aquí puedes implementar la lógica para eliminar un usuario
      const confirmarEliminar = confirm('¿Estás seguro de eliminar esta firma?');
      if (confirmarEliminar) {
        this.firmas.splice(index, 1);
        this.firmaService.setFirmas(this.firmas);
      
    }
}
agregarFirma(){
  this.router.navigate(['/firmas/formFirmas']);
}
}
