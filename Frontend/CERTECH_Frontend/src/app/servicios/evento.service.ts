import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos: any[] = [
    {
      id: 1,
      titulo: 'Evento 1',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      imagen: 'e.png'
    },
    {
      id: 2,
      titulo: 'Evento 2',
      descripcion: 'Otra descripción interesante.',
      imagen: 'e.png'
    },
  
  ];getEventos(): any[] {
    return this.eventos;
  }
  agregarEvento(nuevoEvento: any, imagenFile: File): void {
    const reader = new FileReader();
    
    reader.onload = (event: any) => {
      nuevoEvento.imagen = event.target.result;
      nuevoEvento.id = this.eventos.length + 1;
      this.eventos.push(nuevoEvento);
    };
    
    // Lee el contenido del archivo como un URL de datos
    reader.readAsDataURL(imagenFile);
  }
}