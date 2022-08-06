import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path:'', redirectTo:'track', pathMatch: 'full' }, // automatic redirection to login  
  { path:'login', title:'login', component: LoginComponent},
  { path:'track', title:'track', component: TrackComponent},
  { path:'main', title:'main', component: MainComponent },


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// debilek --->  <---
// ahahahhahhah get pranked
