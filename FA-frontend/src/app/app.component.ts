import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BackendApiService } from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FA-angular';
  private http: HttpClient;
  private idUser: number;
  /**
   *
   */
  constructor(HTTP: HttpClient, private router:Router) {
    this.http = HTTP;
    this.idUser = -1;
  }

  async ngOnInit(): Promise<void> {
  }

  home(){
    this.router.navigate(['track']);
  }

  results()
  {
    this.router.navigate(['results']);
  }

}
