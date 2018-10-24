import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExternoModule } from './externo/externo.module';
import { InternoModule } from './interno/interno.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmeListagemComponent } from './interno/filme-listagem/filme-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExternoModule,
    InternoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
