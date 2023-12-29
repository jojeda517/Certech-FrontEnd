import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { EventoService } from '../../servicios/evento.service';

@Component({
  selector: 'app-form-even',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './form-even.component.html',
  styleUrl: './form-even.component.css'
})
export class FormEvenComponent {
  constructor(private router:Router,private eventoService: EventoService){}
  nomevent: string= "";
  tipo: string= "";
  descripcion: string= "";
  portada: File | null = null;
  imagenFile: File | null = null;
  onFileSelected(event: any): void {
    this.imagenFile = event.target.files[0];
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

cancelar(){
  this.router.navigate(['/dashboard']);
}
guardarEvento(){
 
    const nuevoEvento = {
      titulo: 'Nuevo Evento',
      descripcion: 'Descripción del nuevo evento.'
    };

    if (this.imagenFile) {
      this.eventoService.agregarEvento(nuevoEvento, this.imagenFile);
    } else {
      // Manejo si no se selecciona un archivo
      console.error('No se ha seleccionado un archivo de imagen.');
    }
    this.router.navigate(['/dashboard']);
  }

}


