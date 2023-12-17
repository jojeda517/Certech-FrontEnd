import { Component } from '@angular/core';
import { SearchComponent } from "../componentes/search/search.component";
import { ModulosComponent } from "../componentes/modulos/modulos.component";
import { CardsComponent } from "../componentes/cards/cards.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [SearchComponent, ModulosComponent, CardsComponent, CommonModule]
})
export class InicioComponent {
    cardsData = [
        { nombre: 'Juan', cedula: '1850089952', categoria: 'Cursos', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { nombre: 'Maria', cedula: '987654321', categoria: 'Exposiciones', descripcion: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        { nombre: 'Carlos', cedula: '567890123', categoria: 'participantes', descripcion: 'Integer in justo eu massa ultricies viverra at ut libero.' }
      ];
    
      categorias = this.getCategorias(); // Obtener todas las categorías únicas
    
      filteredCards: any[] = []; // Almacena las tarjetas filtradas
    
      searchByCedula(cedula: string): void {
        // Implementa la lógica de búsqueda por cédula y actualiza filteredCards
        this.filteredCards = this.cardsData.filter(card => card.cedula === cedula);
      }
    
      filterByCategory(category: string): void {
        // Implementa la lógica de filtrado por categoría y actualiza filteredCards
        this.filteredCards = this.cardsData.filter(card => card.categoria === category);
      }
    
      private getCategorias(): string[] {
        // Obtener todas las categorías únicas
        return Array.from(new Set(this.cardsData.map(card => card.categoria)));
      }
    }