import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { HeaderComponent } from './estructura/header/header.component';
import { CardsComponent } from './estructura/componentes/cards/cards.component';
import { ModulosComponent } from './estructura/componentes/modulos/modulos.component';
import { SearchComponent } from './estructura/componentes/search/search.component';
import { NavbarComponent } from './estructura/componentes/navbar/navbar.component';
import { FirmasComponent } from './paginas/firmas/firmas.component';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    ModulosComponent,
    SearchComponent,
    NavbarComponent,
    FirmasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
