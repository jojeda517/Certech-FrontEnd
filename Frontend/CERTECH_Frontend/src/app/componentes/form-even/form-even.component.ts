import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-even',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-even.component.html',
  styleUrl: './form-even.component.css'
})
export class FormEvenComponent {
  constructor(private router:Router){}
  nomevent: string= "";
  tipo: string= "";
  descripcion: string= "";
  portada: string= "";
cancelar(){
  this.router.navigate(['/dashboard']);
}
}
