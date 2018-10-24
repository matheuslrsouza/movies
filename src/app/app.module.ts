import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExternoModule } from './externo/externo.module';
import { InternoModule } from './interno/interno.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptadorDeRequisicoes } from './service/http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExternoModule,
    InternoModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptadorDeRequisicoes,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
