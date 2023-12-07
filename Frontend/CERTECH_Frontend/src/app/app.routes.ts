import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './componentes/search/search.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: InicioComponent},


];