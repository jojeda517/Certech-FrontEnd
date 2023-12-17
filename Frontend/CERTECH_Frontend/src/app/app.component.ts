import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PieComponent } from "./pie/pie.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "./componentes/search/search.component";
import { ModulosComponent } from "./componentes/modulos/modulos.component";
import { CardsComponent } from "./componentes/cards/cards.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from './login/login.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
        RouterOutlet,
        PieComponent,
        HeaderComponent,
        FormsModule,
        SearchComponent, ModulosComponent, CardsComponent, InicioComponent,LoginComponent]
})
export class AppComponent {
    
}
