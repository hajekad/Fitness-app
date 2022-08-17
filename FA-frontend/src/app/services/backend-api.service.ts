import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WalkModel } from '../walk-model';
import { WalkModelList } from '../walk-model-list';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private url:string = 'https://localhost:7141/api/';

  constructor(private http: HttpClient) {}

  async postWalk(model: WalkModel)
  {
    
  }

  async getWalks(idUser:number)
  {
    var data = this.url + "walks/get/" + idUser;
    const response = fetch(data, {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        body: null,
        mode: "no-cors",
    });
    console.log(response);
  }
}
