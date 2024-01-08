import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ValidacionComponent } from './paginas/validacion/validacion.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { FirmasComponent } from './paginas/firmas/firmas.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { FormEventComponent } from './componentes/formularios/form-event/form-event.component';
import { TablaComponent } from './componentes/formularios/tabla/tabla.component';
import { CertificadosComponent } from './paginas/certificados/certificados.component';
import { FormEstudianteComponent } from './componentes/formularios/form-estudiante/form-estudiante.component';
import { FormFirmaComponent } from './componentes/formularios/form-firma/form-firma.component';
import { FormCertificadoComponent } from './componentes/formularios/form-certificado/form-certificado.component';
import { SeccionCertificadoComponent } from './paginas/seccion-certificado/seccion-certificado.component';
import { DesarrolladoresComponent } from './paginas/desarrolladores/desarrolladores.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent
    //,canActivate: [AuthGuard]
    },
    {path:'firmas', component:FirmasComponent
    //,canActivate: [AuthGuard]
    
    },
    {path:'firmas/formFirmas', component:FormFirmaComponent
    //,canActivate: [AuthGuard]
    
    },
    {path:'validacion', component:ValidacionComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios', component:UsuariosComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/formenevt', component:FormEventComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/tabla', component:TablaComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios/certificado', component:CertificadosComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios/formCertificado', component:FormCertificadoComponent
    //,canActivate: [AuthGuard]
    },
    {path:'eventos/usuarios/formEstudiante', component:FormEstudianteComponent
    //,canActivate: [AuthGuard]
    },
    { path: 'eventos/usuarios/:id', component: UsuariosComponent },

    { path: 'certificados', component: CertificadosComponent },
    { path: 'desarrolladores', component: DesarrolladoresComponent },
    { path: 'eventos/seccionCertificados', component: SeccionCertificadoComponent},
    

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
