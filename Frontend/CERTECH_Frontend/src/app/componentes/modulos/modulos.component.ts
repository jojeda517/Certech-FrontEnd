import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
    selector: 'app-modulos',
    standalone: true,
    template: `
    <nav>
      <ul>
        <li (click)="navegar('todos')">Todos</li>
        <li (click)="navegar('cursos')">Cursos</li>
        <li (click)="navegar('conferencias')">Conferencias</li>
      </ul>
    </nav>
  `,
    templateUrl: './modulos.component.html',
    styleUrl: './modulos.component.css',
    imports: [CardsComponent]
})
export class ModulosComponent {

}
