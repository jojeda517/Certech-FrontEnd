import { Component } from '@angular/core';
import { SearchComponent } from "../componentes/search/search.component";
import { ModulosComponent } from "../componentes/modulos/modulos.component";
import { CardsComponent } from "../componentes/cards/cards.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [SearchComponent, ModulosComponent, CardsComponent]
})
export class InicioComponent {

}
