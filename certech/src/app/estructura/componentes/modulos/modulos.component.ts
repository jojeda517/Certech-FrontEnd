import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent {
  
  @Input() categorias: string[] = [];
  @Output() filterEvent = new EventEmitter<string>();

  filterByCategory(category: string): void {
    this.filterEvent.emit(category);
  }
}

