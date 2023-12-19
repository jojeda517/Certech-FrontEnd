import { ContentChild, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { SearchComponent } from '../componentes/search/search.component';
import { CardsComponent } from '../componentes/cards/cards.component';
import { ModulosComponent } from '../componentes/modulos/modulos.component';
import { HeaderComponent } from '../header/header.component';
import { InicioComponent } from './inicio.component';
import { PieComponent } from '../pie/pie.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SearchComponent,
    CardsComponent,
    ModulosComponent,
    HeaderComponent,
    PieComponent
  ]
})
export class InicioModule { }
