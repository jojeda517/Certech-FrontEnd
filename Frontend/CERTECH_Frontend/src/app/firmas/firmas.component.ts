import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmasService } from '../servicios/firmas.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../componentes/navbar/navbar.component';

@Component({
  selector: 'app-firmas',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './firmas.component.html',
  styleUrl: './firmas.component.css'
})
export class FirmasComponent implements OnInit {
  firmas: any[] = [];

  constructor(private router: Router, private firmaService: FirmasService) {}

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
    this.router.navigate(['/firmas/formFirmas']);
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
