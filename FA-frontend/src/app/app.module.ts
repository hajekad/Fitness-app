import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';
import { defineLordIconElement } from "lord-icon-element";
import { AfterWalkComponent } from './after-walk/after-walk.component';
import { WalkDisplayComponent } from './results/walk-display/walk-display.component';
import { InfoScreenComponent } from './info-screen/info-screen.component';
import { NavbarCustomComponent } from './navbar-custom/navbar-custom.component';

function countdownConfigFactory(): CountdownConfig {
  return { format: `mm:ss` };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrackComponent,
    ResultsComponent,
    AfterWalkComponent,
    WalkDisplayComponent,
    InfoScreenComponent,
    NavbarCustomComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
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
