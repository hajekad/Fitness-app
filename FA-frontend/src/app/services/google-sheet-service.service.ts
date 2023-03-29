import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUserInt,  } from 'src/app/models/create-user-int';
import { WalkModelInt } from 'src/app/models/walk-model-int';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetServiceService {
  constructor(private http: HttpClient) {}




  createUser(
    _sex: number,
    _edu: number,
    _birthYear: number,
    _athlete: boolean,
    _smoker: boolean,
  ): Observable<CreateUserInt> {
    return this.http.post<CreateUserInt>(`${environment.CONNECTION_URL_USERS}`, {
      _sex,
      _edu,
      _birthYear,
      _athlete,
      _smoker,
    });
  }

  listUser() {
    return this.http.get(`${environment.CONNECTION_URL_USERS}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.CONNECTION_URL_USERS}/${id}`);
  }

  getUserDataById(id: number) {
    return this.http.get(`${environment.CONNECTION_URL_USERS}/${id}`);
  }






  createWalk(
    _user_id: number,
    _distance: number,
    _startLat: number,
    _startLong: number,  
    _endLat: number,
    _endLong: number,
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
