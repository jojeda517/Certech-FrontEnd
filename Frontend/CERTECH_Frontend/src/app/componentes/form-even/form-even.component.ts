import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-form-even',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './form-even.component.html',
  styleUrl: './form-even.component.css'
})
export class FormEvenComponent {
  constructor(private router:Router){}
  nomevent: string= "";
  tipo: string= "";
  descripcion: string= "";
  portada: string= "";

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
}
