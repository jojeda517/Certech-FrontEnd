import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-modulos',
    standalone: true,
    templateUrl: './modulos.component.html',
    styleUrl: './modulos.component.css',
    imports: [CardsComponent,CommonModule,FormsModule]
})
export class ModulosComponent {
  @Input() categorias: string[] = [];
  @Output() filterEvent = new EventEmitter<string>();

  filterByCategory(category: string): void {
    this.filterEvent.emit(category);
  }
}