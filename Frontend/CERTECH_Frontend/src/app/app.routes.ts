import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import path from 'path';
import { ValidacionComponent } from './validacion/validacion.component';
import { FirmasComponent } from './firmas/firmas.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'inicio', component: InicioComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path:'eventos', component:EventosComponent},
    {path:'validacion', component:ValidacionComponent},
    {path:'firmas', component:FirmasComponent}
];