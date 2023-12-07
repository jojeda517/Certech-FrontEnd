import { Component, EventEmitter, Output } from '@angular/core';
import { ModulosComponent } from "../modulos/modulos.component";
import { CardsComponent } from "../cards/cards.component";

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [ModulosComponent, CardsComponent]
})
export class SearchComponent {
    @Output() busquedaCambiada = new EventEmitter<string>();
    terminoBusqueda: string = '';
  
    buscar() {
      this.busquedaCambiada.emit(this.terminoBusqueda);
    }
}
