import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmaService } from 'src/app/servicios/firma.service';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.component.html',
  styleUrls: ['./firmas.component.css']
})
export class FirmasComponent implements OnInit {
  firmas: any[] = [];

  constructor(private router: Router, private firmaService: FirmaService) {}

  ngOnInit(): void {
    this.getFirmas();
  }

  getFirmas(): void {
    this.firmaService.obtenerFirmas().subscribe(
      (response) => {
        if (response && response.firmas) {
          this.firmas = response.firmas;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminarFirma(id_firma: string) {
    this.firmaService.eliminarParticipante(id_firma).subscribe(
      (response) => {
        console.log('Firma eliminado:', response);
        // Volver a cargar la lista después de eliminar el participante
        this.getFirmas();
      },
      (error) => {
        console.error('Error al eliminar firma:', error);
        // Manejar errores aquí
      }
    );
  }

  agregarFirma(): void {
    this.router.navigate(['firmas/formFirmas']);
  }

  mostrarEventos(): void {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion(): void {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas(): void {
    this.router.navigate(['/firmas']);
  }
  editarFirma(){

  }
}
