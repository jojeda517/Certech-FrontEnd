import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PieComponent } from "./pie/pie.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "./componentes/search/search.component";


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
        SearchComponent]
})
export class AppComponent {

}
