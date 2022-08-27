import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path:'', redirectTo:'track', pathMatch: 'full' }, // automatic redirection to login  
  { path:'login', title:'login', component: LoginComponent},
  { path:'track', title:'track', component: TrackComponent},
  { path:'results', title:'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
