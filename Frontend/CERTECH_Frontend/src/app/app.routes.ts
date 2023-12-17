import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import path from 'path';
import { ValidacionComponent } from './validacion/validacion.component';
import { FirmasComponent } from './firmas/firmas.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'inicio', component: InicioComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path:'eventos', component:DashboardComponent,canActivate: [AuthGuard]},
    {path:'validacion', component:ValidacionComponent,canActivate: [AuthGuard]},
    {path:'firmas', component:FirmasComponent, canActivate: [AuthGuard]}

];