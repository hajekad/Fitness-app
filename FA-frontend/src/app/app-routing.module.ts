import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { ResultsComponent } from './results/results.component';
import { AfterWalkComponent } from './after-walk/after-walk.component';

const routes: Routes = [
  { path:'', redirectTo:'track', pathMatch: 'full' }, // automatic redirection to login  
  { path:'login', component: LoginComponent},
  { path:'track', component: TrackComponent},
  { path:'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
