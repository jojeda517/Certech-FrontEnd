import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @Output() searchEvent = new EventEmitter<string>();
  searchCedula: string = '';

  search(): void {
    // Emitir el evento de búsqueda con el número de cédula
    this.searchEvent.emit(this.searchCedula);
  }
}
