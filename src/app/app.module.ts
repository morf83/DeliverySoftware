import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZucchettiComponent } from './zucchetti/zucchetti.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ZucchettiComponent,
    ProfiloComponent,
    BachecaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
