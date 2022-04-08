import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormEstudianteComponent } from './component/form-estudiante/form-estudiante.component';
import { HeaderComponent } from './component/header/header.component';


const routes: Routes = [
  { path:'', redirectTo:'estudiantes', pathMatch:'full'},
  { path:'estudiantes', component: EstudiantesComponent},
  { path:'estudiantes/registro', component: FormEstudianteComponent},
  { path:'estudiantes/registro/:id', component: FormEstudianteComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormEstudianteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
