import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ValidacionComponent } from './validacion/validacion.component';
import { FirmasComponent } from './firmas/firmas.component';
import { TablaComponent } from './paginas/tabla/tabla.component';
import { FormEvenComponent } from './componentes/form-even/form-even.component';

import { CertificadosComponent } from './certificados/certificados.component';

import { UduariosComponent } from './paginas/uduarios/uduarios.component';


export const routes: Routes = [
     // Otras rutas aquí...
  {
    path: 'eventos/usuarios',
    component: UduariosComponent, // Asegúrate de tener el componente asociado
  },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },

    { path: 'eventos', component: EventosComponent },
    { path: 'validacion', component: ValidacionComponent },
    { path: 'eventos/tabla', component: TablaComponent },
    { path: 'eventos/formenevt', component: FormEvenComponent },
    { path: 'firmas', component: FirmasComponent },
    { path: 'eventos/:id', component: EventosComponent },
    { path: 'certificados', component: CertificadosComponent }
];

    {path:'eventos', component:EventosComponent
    //,canActivate: [AuthGuard]
    },
    {path:'validacion', component:ValidacionComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/tabla', component:TablaComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/formenevt', component:FormEvenComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios', component:UduariosComponent
    //,canActivate: [AuthGuard]
    },
    {path:'firmas', component:FirmasComponent
    //,canActivate: [AuthGuard]
    },
    { path: 'eventos/:id', component: EventosComponent } 
];

