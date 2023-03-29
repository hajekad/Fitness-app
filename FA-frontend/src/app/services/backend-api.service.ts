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
  private idUser:number;
  private walkList: WalkModelList;

  constructor(private HTTP: HttpClient, private router:Router) {
    this.idUser = Number(localStorage.getItem('userId'));

    this.walkList = new WalkModelList;
  }

  appendNewWalk(model: WalkModel) {
    localStorage.setItem('walkList', this.getWalks() + JSON.stringify(model) + '\n');
  }

  getWalks(): string {
    let tmp = localStorage.getItem('walkList');
    
    if(tmp)
      return tmp;

    return '';
  }
}
