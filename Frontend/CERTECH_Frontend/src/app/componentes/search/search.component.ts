import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ModulosComponent } from "../modulos/modulos.component";

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [ModulosComponent]
})
export class SearchComponent {

}
