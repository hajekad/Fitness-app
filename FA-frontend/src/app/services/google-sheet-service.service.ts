import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUserInt,  } from 'src/app/models/create-user-int';
import { WalkModelInt } from 'src/app/models/walk-model-int';
import { max, Observable } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetServiceService {
  constructor(private http: HttpClient) {}




  createUser(
    _id: string,
    _sex: string,
    _education: string,
    _birthYear: string,
    _athlete: string,
    _smoker: string,
  ): Observable<CreateUserInt> {
    try {
      return this.http.post<CreateUserInt>(`${environment.CONNECTION_URL_USERS}`, {
        _id,
        _sex,
        _education,
        _birthYear,
        _athlete,
        _smoker,
      })
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  maxId(payload : any) : number {
    const wait = console.log({payload});

    let max = 0;
    for (let i = 0; i < payload.length; i++) {
      if (payload[i]._id > max) {
        max = payload[i]._id;
      }
    }

    return ++max;
  }

  async getUserMaxId() {
    try {
      const response = await this.http.get(`${environment.CONNECTION_URL_USERS}`).toPromise();
      const maxId = this.maxId(response);
      return maxId;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  listUser() {
    return this.http.get(`${environment.CONNECTION_URL_USERS}`)
      .subscribe(data => console.log(data));
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.CONNECTION_URL_USERS}/${id}`);
  }

  getUserDataById(id: number) {
    return this.http.get(`${environment.CONNECTION_URL_USERS}/${id}`);
  }






  createWalk(
    _user_id: string,
    _distance: string,
    _startLat: string,
    _startLong: string,
    _endLat: string,
    _endLong: string,
    _date: string,
  ): Observable<CreateUserInt> {
    return this.http.post<CreateUserInt>(`${environment.CONNECTION_URL_WALKS}`, {
      _user_id,
      _distance,
      _startLat,
      _startLong,
      _endLat,
      _endLong,
      _date,
    });
  }

  listWalk() {
    return this.http.get(`${environment.CONNECTION_URL_WALKS}`);
  }

  deleteWalk(id: number) {
    return this.http.delete(`${environment.CONNECTION_URL_WALKS}/${id}`);
  }

  getWalkDataById(id: number) {
    return this.http.get(`${environment.CONNECTION_URL_WALKS}/${id}`);
  }
}
