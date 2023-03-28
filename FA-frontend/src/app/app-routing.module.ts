import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { ResultsComponent } from './results/results.component';
import { AfterWalkComponent } from './after-walk/after-walk.component';
import { InfoScreenComponent } from './info-screen/info-screen.component';

const routes: Routes = [
  { path:'', redirectTo:'info', pathMatch: 'full' }, // automatic redirection to login  
  { path:'login', component: LoginComponent},
  { path:'track', component: TrackComponent},
  { path:'results', component: ResultsComponent},
  { path:'info', component: InfoScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
