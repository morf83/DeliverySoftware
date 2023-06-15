import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ZucchettiComponent } from './zucchetti/zucchetti.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuliComponent } from './moduli/moduli.component';
import { StartAttComponent } from './start-att/start-att.component';

@NgModule({
  declarations: [
    AppComponent,
    ZucchettiComponent,
    ProfiloComponent,
    BachecaComponent,
    HomeComponent,
    LoginComponent,
    ModuliComponent,
    StartAttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
