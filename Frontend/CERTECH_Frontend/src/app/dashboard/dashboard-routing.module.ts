import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventosComponent } from '../eventos/eventos.component';
import { ValidacionComponent } from '../validacion/validacion.component';
import { FirmasComponent } from '../firmas/firmas.component';
import { TablaComponent } from '../paginas/tabla/tabla.component';

const routes:  Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'eventos', component: EventosComponent },
      { path: 'validacion', component: ValidacionComponent },
      { path: 'firmas', component: FirmasComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  {
    path: 'eventos', // Ruta principal
    component: EventosComponent, // Componente principal
    children: [
      {
        path: 'tabla', // Subruta
        component: TablaComponent // Componente asociado a la subruta
      }
      // Puedes agregar más subrutas si es necesario
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
