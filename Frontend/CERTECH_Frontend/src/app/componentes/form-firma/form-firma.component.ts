import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirmasService } from '../../servicios/firmas.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-firma',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './form-firma.component.html',
  styleUrl: './form-firma.component.css'

})
export class FormFirmaComponent implements OnInit {
  cedula: string = '';
  nombre: string = '';
  correo: string = '';
  celular: string = '';
  firma: string='';

  constructor(private router: Router, private firmaService: FirmasService) {}

  ngOnInit(): void {}

  cancelar(): void {
    this.router.navigate(['/firmas']);
  }

  guardar(): void {
    if (this.nombre && this.cedula && this.correo && this.celular) {
      const nuevaFirma = {
        propietario_firma: this.nombre,
        cargo_propietario: this.cedula,
        correo: this.correo,
        firma: this.firma,
        estado_firma: 'Activo' // Supongo que este campo es requerido
      };

      this.firmaService.createFirma(nuevaFirma).subscribe(
        (response) => {
          console.log(response); // Manejar la respuesta del servidor si es necesario
          this.router.navigate(['/firmas']);
        },
        (error) => {
          console.error(error);
          alert('Error al guardar la firma');
        }
      );
    } else {
      console.error('Por favor, complete todos los campos antes de guardar.');
    }
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

}
