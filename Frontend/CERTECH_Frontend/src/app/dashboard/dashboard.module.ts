import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component'; // Importa tu componente
import { NavbarComponent } from '../componentes/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent // Agrega tu componente aquí
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,NavbarComponent
  ]
})
export class DashboardModule { }
