import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { AdminComponent } from './components/admin/admin.component';
import { PasantiaConfigComponent } from './components/pasantia-config/pasantia-config.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegisterComponent } from './components/register/register.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { ListaPasantesComponent } from './components/lista-pasantes/lista-pasantes.component';
import { PasantePerfilComponent } from './components/pasante-perfil/pasante-perfil.component';
import { PasantiaAsignacionComponent } from './components/pasantia-asignacion/pasantia-asignacion.component';
import { PasanteSubirAsigComponent } from './components/pasante-subir-asig/pasante-subir-asig.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { GuardGuard } from './guards/guard.guard';
import { PasantiaAsignacionVistaComponent } from './components/pasantia-asignacion-vista/pasantia-asignacion-vista.component';
import { PasanteHomeComponent } from './components/pasante-home/pasante-home.component';
import { RolesResponse } from 'src/app/models/Roles';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [GuardGuard] },
  { path: 'admin/:id', component: PasantiaAsignacionComponent },
  { path:'admin/config/:id', component: PasantiaConfigComponent },
  { path: 'admin/asignacion/:id', component: PasantiaAsignacionVistaComponent },
  { path: 'formulario', component: FormularioComponent ,canActivate: [GuardGuard]},
  { path: 'registro', component: RegisterComponent},
  { path: 'solicitudes', component: SolicitudesComponent,canActivate: [GuardGuard]},
  { path: 'recuperar-clave', component: RecuperarClaveComponent,canActivate: [GuardGuard]},
  { path: 'admin/:id', component: PasantiaAsignacionComponent, canActivate: [GuardGuard] },
  { path: 'admin/config/:id', component: PasantiaConfigComponent, canActivate: [GuardGuard] },
  { path: 'admin/asignacion/:id', component: PasantiaAsignacionVistaComponent, canActivate: [GuardGuard] },
  { path: 'registro', component: FormularioComponent },
  { path: 'formulario', component: RegisterComponent},
  { path: 'admin/solicitudes/:id', component: SolicitudesComponent, canActivate: [GuardGuard]},
  { path: 'recuperar-clave/:id', component: RecuperarClaveComponent,canActivate: [GuardGuard]},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
  { path: 'file-upload', component: FileUploadComponent, canActivate: [GuardGuard]},
  { path: 'lista-pasante', component: ListaPasantesComponent, canActivate: [GuardGuard] },
  { path: 'perfil/:id', component: PasantePerfilComponent,canActivate: [GuardGuard]},
  { path: 'pasante-subir-asig/:id',component:PasanteSubirAsigComponent,canActivate: [GuardGuard]},
  { path: 'home-pasantes', component:PasanteHomeComponent,canActivate: [GuardGuard]},
  { path : '**', pathMatch: 'full' , redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
