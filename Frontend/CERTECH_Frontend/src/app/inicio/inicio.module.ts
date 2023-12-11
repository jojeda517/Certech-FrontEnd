import { ContentChild, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { SearchComponent } from '../componentes/search/search.component';
import { CardsComponent } from '../componentes/cards/cards.component';
import { ModulosComponent } from '../componentes/modulos/modulos.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SearchComponent,
    CardsComponent,
    ModulosComponent
  ]
})
export class InicioModule { }
