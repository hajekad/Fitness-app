import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WalkModel } from '../walk-model';
import { WalkModelList } from '../walk-model-list';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private url:string = 'https://localhost:7141/api/walks';

  async postWalk(model: WalkModel)
  {    
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
    console.log(response);
  }

  async getWalks(idUser:number)
  {
    const response = await fetch
    (
      this.url + "/get/" + idUser,
      {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        mode: "no-cors",
      }
    );
    console.log(response);
  }
}
