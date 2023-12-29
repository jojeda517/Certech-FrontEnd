import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import path from 'path';
import { ValidacionComponent } from './validacion/validacion.component';
import { FirmasComponent } from './firmas/firmas.component';
import { AuthGuard } from './auth.guard';
import { TablaComponent } from './paginas/tabla/tabla.component';
import { FormEvenComponent } from './componentes/form-even/form-even.component';
import { UduariosComponent } from './paginas/uduarios/uduarios.component';
import { FormEstuComponent } from './componentes/form-estu/form-estu.component';
import { FormFirmaComponent } from './componentes/form-firma/form-firma.component';

export const routes: Routes = [
     // Otras rutas aquí...
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent
    //,canActivate: [AuthGuard]
},{
    path: 'eventos/usuarios',
    component: UduariosComponent, // Asegúrate de tener el componente asociado
  },
    
    { path: 'inicio', component: InicioComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path:'eventos', component:EventosComponent
    //,canActivate: [AuthGuard]
    },   
    {path:'eventos/usuarios', component:UduariosComponent
    //,canActivate: [AuthGuard]
    },
    {path:'firmas', component:FirmasComponent
    //,canActivate: [AuthGuard]
    },
    {path:'validacion', component:ValidacionComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios/tabla', component:TablaComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/formenevt', component:FormEvenComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios/formEst', component:FormEstuComponent
    //,canActivate: [AuthGuard]
    },
    {path:'firmas/formFirmas', component:FormFirmaComponent
    //,canActivate: [AuthGuard]
    },
   
 
]