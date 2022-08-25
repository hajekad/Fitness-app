import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WalkModel } from '../walk-model';
import { WalkModelList } from '../walk-model-list';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private url:string = 'https://localhost:7141/api/walks';
  private idUser:number;
  private http:HttpClient;

  /**
   *
   */
  constructor(private HTTP: HttpClient, private router:Router) {
    this.idUser = -1;
    this.http = HTTP;

    const wait = this.http.get('../assets/id.txt', {responseType: 'text'})
              .subscribe(data => this.getId(data));
  }

  async postWalk(model: WalkModel)
  {
    model.user_id = this.idUser;

    const response = await fetch
    (
      this.url + "/post",
      {
        mode: 'cors',
        method: "POST",
        headers: {
                    'Access-Control-Allow-Origin':'*',
                    "Content-Type": "application/json",
                    "accept": "text-plain"
      },
        body: JSON.stringify(model),
      }
    );
    console.log("POST response: " + response);
  }

  async getWalks(idUser:number)
  {
    const resp = await fetch
    (
      this.url + "/get/" + idUser,
      {
        method: "GET",
        headers: { "Content-Type": "application/json"},
      }
    )
    .then(response => response.json())
    .then(json => console.log(json));
  }

  getId(data:string)
  {
    this.idUser = Number(data);
    
    if(this.idUser == -1)
    {
      console.log('new user');
      this.router.navigate(['login']);
    }
    console.log(this.idUser);
  }
}
