import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventosComponent } from '../eventos/eventos.component';
import { ValidacionComponent } from '../validacion/validacion.component';
import { FirmasComponent } from '../firmas/firmas.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: 'eventos', component: EventosComponent },
    { path: 'validacion', component: ValidacionComponent },
    { path: 'firmas', component: FirmasComponent },
    { path: '', redirectTo: 'eventos', pathMatch: 'full' },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
