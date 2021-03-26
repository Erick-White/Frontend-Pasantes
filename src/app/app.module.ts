import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RecuperarClaveComponent } from './components/recuperar-clave/recuperar-clave.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { PasantiaAsignacionComponent } from './components/pasantia-asignacion/pasantia-asignacion.component';
import { AsignacionSubidaComponent } from './components/asignacion-subida/asignacion-subida.component';
import { ListaPasantesComponent } from './components/lista-pasantes/lista-pasantes.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { PasantiaConfigComponent } from './components/pasantia-config/pasantia-config.component';
import { PasanteHomeComponent } from './components/pasante-home/pasante-home.component';
import { PasanteSubirAsigComponent } from './components/pasante-subir-asig/pasante-subir-asig.component';
import { PasanteCalificacionesComponent } from './components/pasante-calificaciones/pasante-calificaciones.component';
import { PasanteRepoComponent } from './components/pasante-repo/pasante-repo.component';
import { PasanteRepoVistaComponent } from './components/pasante-repo-vista/pasante-repo-vista.component';
import { PasantePerfilComponent } from './components/pasante-perfil/pasante-perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PasantiaAsignacionVistaComponent } from './components/pasantia-asignacion-vista/pasantia-asignacion-vista.component';
import { ErrorComponent } from './error/error.component';

import { SharedService } from './shared/shared';
import { SidebarModule } from 'ng-sidebar';



import { CookieService } from 'ngx-cookie-service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DndDirective } from './directives/dnd.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    RecuperarClaveComponent,
    RecuperarCuentaComponent,
    NavbarComponent,
    AdminComponent,
    PasantiaAsignacionComponent,
    AsignacionSubidaComponent,
    ListaPasantesComponent,
    SolicitudesComponent,
    PasantiaConfigComponent,
    PasanteHomeComponent,
    PasanteSubirAsigComponent,
    PasanteCalificacionesComponent,
    PasanteRepoComponent,
    PasanteRepoVistaComponent,
    PasantePerfilComponent,
    RegisterComponent,
    FileUploadComponent,
    PasantiaAsignacionVistaComponent,
    SidebarComponent,
    ErrorComponent,
    DndDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    NgxPaginationModule,
    [FroalaEditorModule.forRoot(), FroalaViewModule]
  ],
  providers: [SharedService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
