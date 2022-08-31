import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../create-user-dto';
import { WalkModel } from '../walk-model';
import { WalkModelList } from '../walk-model-list';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private url:string = 'https://localhost:7141/api';
  private idUser:number;
  private http:HttpClient;
  private walkList: WalkModelList;

  constructor(private HTTP: HttpClient, private router:Router) {
    let tmp = localStorage.getItem('userId');
    
    if(tmp == null)
    {
      this.router.navigate(['login']);
      tmp = localStorage.getItem('userId');
    }
    
    this.http = HTTP;


    this.idUser = Number(tmp);

    this.walkList = new WalkModelList;

    console.log(this.idUser);
  }

  setIdUser(json: any)
  {
    this.idUser = Number(json.toString());
    
    localStorage.setItem('userId', this.idUser.toString()); 
    
    console.log("newId: " + localStorage.getItem('userId'));
  }

  async postUser(model: CreateUserDto) : Promise<number>
  {
    localStorage.setItem('yyyy', model._birthYear.toString());
    const response = await fetch
    (
      this.url + "/users/post",
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
    )
    .then(response => response.json())
    .then(json => this.setIdUser(json));

    return this.idUser;
  }

  async postWalk(model: WalkModel)
  { 
    this.appendNewWalk(model);
    model.user_id = this.idUser;

    const response = await fetch
    (
      this.url + "/walks/post",
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
    console.log("Walk POST response: " + response);
  }

  appendNewWalk(model: WalkModel)
  {
    localStorage.setItem('walkList', this.getWalks() + JSON.stringify(model) + '\n');
  }

  getWalks(): string
  {
    let tmp = localStorage.getItem('walkList');
    
    if(tmp)
      return tmp;

    return '';
  }
}
