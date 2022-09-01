import { Component, NgModule, OnChanges, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { LocationService } from '../services/location.service';
import { BackendApiService } from '../services/backend-api.service';
import { WalkModel } from '../walk-model';

function countdownConfigFactory(): CountdownConfig {
  return { format: `mm:ss` };
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  changeDetection: ChangeDetectionStrategy.Default,

  host: {
    '[class.card]': `false`,
    '[class.text-center]': `false`,
  }
})
export class TrackComponent implements AfterViewInit{  
  // loading circle variables
  public outerStroke:string = "#FF0000";
  public outerStrokeGradientStop:string = "#000000";
  public innerStroke:string = "#FFFFFF";
  public tit:string = '';
  public after:boolean;

  public currWalk: WalkModel;
  public percentLeft:number;
  public timeToTrack:number = 360;
   
  private lat:number;
  private long:number;
  private activator:number;
  private tracking:boolean;
  public birthYear:number;

  status = 'start';
  @ViewChild('countdown')
  counter!: CountdownComponent;

  constructor( private router:Router, private locationService:LocationService, private backendService:BackendApiService) { 
    this.percentLeft = 100;
    this.activator = 0;
    this.lat = 0;
    this.long = 0;
    this.tracking = false;
    this.currWalk = new WalkModel();
    this.after = false;
    this.birthYear = Number(localStorage.getItem('yyyy')?.toString());
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const inter = setInterval(()=>{
      this.percentLeft = this.getPercent();

      if(this.tracking)
      {
        if(this.activator % 2 == 0)
        {
          this.activator = 0;
          this.locationService.getPosition().then(pos=>
            {
              console.log(`Positon: ${pos.lng} ${pos.lat}`);
              this.currWalk.distance += this.getDistance(pos.lng, pos.lat);
            });
        }

        if(this.percentLeft == 0)
        {
          this.after = true;
          this.currWalk.endLat = this.lat;
          this.currWalk.endLong = this.long; 
          this.backendService.postWalk(this.currWalk);
          console.log(`Distance traveled: ${this.currWalk.distance}`);
          this.tracking = false;
        }
      }
      
      this.activator++;
    }, 1000)

  }

  getPercent():number{
    if(this.counter == null)
      return 100;

    return Math.floor(this.counter.left / (this.timeToTrack * 10));
  }

  getDistance(long:number, lat:number):number
  {
    if(this.lat === 0 && this.long === 0)
    {
      this.lat = this.currWalk.startLat = lat;
      this.long = this.currWalk.startLong = long

      return 0;
    }

    const R = 6371e3; // metres
    const φ1 = this.lat * Math.PI/180; // φ, λ in radians
    const φ2 = lat * Math.PI/180;
    const Δφ = (lat-this.lat) * Math.PI/180;
    const Δλ = (long-this.long) * Math.PI/180;
      
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    this.lat = lat;
    this.long = long;
      
    return Math.floor(R * c); // in metres
  }

  onStart(src: CountdownComponent):void{
    if(this.percentLeft == 100)
    {
      this.after = false;
      this.counter = src;
      src.begin();
      this.tracking = true;
    }
  }

  resetTimer(){
    this.after = false;
    this.percentLeft = 100;
    this.lat = 0;
    this.long = 0;
    this.counter.restart();
    this.tracking = false;
    this.currWalk = new WalkModel();
  }

  onClick():void{
    this.router.navigate(['main']);
  }
}
