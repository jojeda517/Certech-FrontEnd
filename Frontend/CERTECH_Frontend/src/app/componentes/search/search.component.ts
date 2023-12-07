import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
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

}
