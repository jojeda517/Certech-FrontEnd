import { Component} from '@angular/core';
import { SearchComponent } from "../componentes/search/search.component";
import { ModulosComponent } from "../componentes/modulos/modulos.component";
import { CardsComponent } from "../componentes/cards/cards.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [SearchComponent, ModulosComponent, CardsComponent,CommonModule]
})
export class InicioComponent {
    

    cardsData = [
        { title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Card 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        { title: 'Card 3', content: 'Integer in justo eu massa ultricies viverra at ut libero.' }
        
      ];

}
