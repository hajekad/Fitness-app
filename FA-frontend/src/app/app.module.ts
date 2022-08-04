import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { materialize } from 'rxjs';

function countdownConfigFactory(): CountdownConfig {
  return { format: `mm:ss` };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [CookieService,{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }