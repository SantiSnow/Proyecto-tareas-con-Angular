import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareasPendientesComponent } from './tareas-pendientes/tareas-pendientes.component';
import { TareasTerminadasComponent } from './tareas-terminadas/tareas-terminadas.component';

const routes: Route[] = [
  {path: '', component: TareasComponent},
  {path: 'tareas-pendientes', component: TareasPendientesComponent},
  {path: 'tareas-terminadas', component: TareasTerminadasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareasPendientesComponent,
    TareasTerminadasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
