import { NgModule } from '@angular/core';
import { InternoComponent } from './interno.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { routes_interno } from './interno-routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes_interno)
  ],
  declarations: [
    InternoComponent,
    InicioComponent
  ]
})
export class InternoModule { }
