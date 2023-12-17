import { Component, EventEmitter, Output } from '@angular/core';
import { ModulosComponent } from "../modulos/modulos.component";
import { CardsComponent } from "../cards/cards.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [ModulosComponent,
        CardsComponent,FormsModule]
})
export class SearchComponent {

  @Output() searchEvent = new EventEmitter<string>();
  searchCedula: string = '';

  search(): void {
    // Emitir el evento de búsqueda con el número de cédula
    this.searchEvent.emit(this.searchCedula);
  }
}
