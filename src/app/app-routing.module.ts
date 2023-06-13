import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { ZucchettiComponent } from './zucchetti/zucchetti.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bacheca', component: BachecaComponent },
  { path: 'zucchetti', component: ZucchettiComponent },
  { path: 'profilo', component: ProfiloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
