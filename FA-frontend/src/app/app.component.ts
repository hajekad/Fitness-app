import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(HTTP: HttpClient) {
    this.http = HTTP;
    this.idUser = -1;
  }

  async ngOnInit(): Promise<void> {
  }
  onClick(){
  }
}
