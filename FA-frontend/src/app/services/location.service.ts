import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements OnInit{
  public lat: number;
  public lng: number;

  constructor() { this.lat = this.lng = 0;}

  ngOnInit(): void {
      if(!navigator.geolocation)
        console.log('location unavailable');

      navigator.geolocation.getCurrentPosition(position => {
        console.log(`lng: ${position.coords.longitude}, lat: ${position.coords.latitude}`);        
      });

      this.watchPosition();
  }

  watchPosition()
  {
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(`lng: ${position.coords.longitude}, lat: ${position.coords.latitude}`);
      this.lng = position.coords.longitude;
      this.lat = position.coords.latitude;
    },(err) => {
      console.log(err);
    },{
      enableHighAccuracy: true,
      maximumAge: 0,
    })
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(position => {
          resolve({lng: position.coords.longitude, lat: position.coords.latitude});
        },
        err => {
          reject(err);
        },{
          enableHighAccuracy: true,
          maximumAge: 0,
        });
    });

  }
}
