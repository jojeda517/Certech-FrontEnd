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
    this.firmaService.getFirmas().subscribe(
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

  eliminarFirma(index: number): void {
    const confirmarEliminar = confirm('¿Estás seguro de eliminar esta firma?');
    if (confirmarEliminar) {
      const idFirma = this.firmas[index].id; // Suponiendo que 'id' es el identificador de la firma
      this.firmaService.deleteFirma(idFirma).subscribe(
        (response) => {
          console.log(response); // Manejar la respuesta del servidor si es necesario
          this.firmas.splice(index, 1);
        },
        (error) => {
          console.error(error);
          alert('Error al eliminar la firma');
        }
      );
    }
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
}
