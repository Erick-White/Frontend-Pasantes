import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'formulario', component: RegisterComponent},
  { path: 'recuperar-clave', component: RecuperarClaveComponent},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
   {path : '**', pathMatch: 'full' , redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
