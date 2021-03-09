import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';


const routes: Routes = [
 
  { path: 'login', component: LoginComponent},
  { path: 'recuperar-clave', component: RecuperarClaveComponent},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
  {path : "**",pathMatch: 'full' ,redirectTo:"login"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
